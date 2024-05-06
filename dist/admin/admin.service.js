"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const admin_model_1 = require("./model/admin.model");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
const Adminmail_service_1 = require("../mail/Adminmail.service");
let AdminService = class AdminService {
    constructor(adminRepo, jwtService, mailService) {
        this.adminRepo = adminRepo;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async getTokens(admin) {
        const payload = {
            id: admin.id,
            fullName: admin.fullName,
            is_active: admin.is_active,
            is_creator: admin.is_creator,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return {
            access_token: accessToken,
            refresh_token: refreshToken,
        };
    }
    async registration(createAdminDto, res) {
        const admin = await this.adminRepo.findOne({
            where: { email: createAdminDto.email },
        });
        if (admin) {
            this.remove(admin.id);
        }
        if (createAdminDto.password !== createAdminDto.confirmPassword) {
            throw new common_1.BadRequestException('Password does not match');
        }
        const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
        const newAdmin = await this.adminRepo.create({
            ...createAdminDto,
            hashedPassword,
        });
        const tokens = await this.getTokens(newAdmin);
        const hashedRefreshToken = await bcrypt.hash(tokens.refresh_token, 7);
        const activationLink = (0, uuid_1.v4)();
        const updatedAdmin = await this.adminRepo.update({ hashedRefreshToken, activationLink }, { where: { id: newAdmin.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 1000,
            httpOnly: true,
        });
        try {
            await this.mailService.sendMail(updatedAdmin[1][0]);
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException('Send error');
        }
        const response = {
            message: 'Admin registered',
            admin: updatedAdmin[1][0],
            tokens,
        };
        return response;
    }
    async activate(link) {
        if (!link) {
            throw new common_1.BadRequestException('Activation link not found');
        }
        const updatAdmin = await this.adminRepo.update({ is_active: true }, {
            where: { activationLink: link, is_active: false },
            returning: true,
        });
        if (!updatAdmin[1][0]) {
            throw new common_1.BadRequestException('admin already activated');
        }
        const response = {
            message: 'admin activated successfully',
            admin: updatAdmin[1][0].is_active,
        };
        return response;
    }
    async login(loginAdminDto, res) {
        const { email, password } = loginAdminDto;
        const admin = await this.adminRepo.findOne({ where: { email } });
        if (!admin) {
            throw new common_1.BadRequestException('admin not found');
        }
        if (!admin.is_active) {
            throw new common_1.BadRequestException('admin not activated');
        }
        const isMatchPass = await bcrypt.compare(password, admin.hashedPassword);
        if (!isMatchPass) {
            throw new common_1.BadRequestException('Password is not match');
        }
        const tokens = await this.getTokens(admin);
        const hashedRefreshToken = await bcrypt.hash(tokens.refresh_token, 7);
        const updatedadmin = await this.adminRepo.update({ hashedRefreshToken }, { where: { id: admin.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'admin registered',
            admin: updatedadmin[1][0],
            tokens,
        };
        return response;
    }
    async logout(refreshToken, res) {
        const userData = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        if (!userData) {
            throw new common_1.ForbiddenException('Admin not verified');
        }
        const updateAdmin = await this.adminRepo.update({
            hashedPassword: null,
        }, {
            where: { id: userData.id },
            returning: true,
        });
        res.clearCookie('refresh_token');
        const reponse = {
            message: 'admin logged out successfully',
            user_refresh_token: updateAdmin[1][0].hashedRefreshToken,
        };
        return reponse;
    }
    async refreshToken(userId, refreshToken, res) {
        console.log(refreshToken);
        const decodecToken = await this.jwtService.decode(refreshToken);
        if (userId != decodecToken['id']) {
            throw new common_1.BadRequestException('admin not found');
        }
        const admin = await this.adminRepo.findOne({ where: { id: userId } });
        if (!admin || !admin.hashedRefreshToken) {
            throw new common_1.BadRequestException('admin not found');
        }
        const tokenMatch = await bcrypt.compare(refreshToken, admin.hashedRefreshToken);
        if (!tokenMatch) {
            throw new common_1.ForbiddenException('Forbiddin');
        }
        const tokens = await this.getTokens(admin);
        const hashedRefreshToken = await bcrypt.hash(tokens.refresh_token, 7);
        const updatedUser = await this.adminRepo.update({ hashedRefreshToken }, { where: { id: admin.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'admin refreshed',
            admin: updatedUser[1][0],
            tokens,
        };
        return response;
    }
    async create(createAdminDto) {
        try {
            const admin = await this.adminRepo.create(createAdminDto);
            return admin;
        }
        catch (error) {
            throw new Error(`Error creating admin: ${error.message}`);
        }
    }
    async findAll() {
        try {
            const admin = await this.adminRepo.findAll();
            if (!admin || admin.length === 0)
                return 'Empty';
            return admin;
        }
        catch (error) {
            throw new Error(`Error finding all admins: ${error.message}`);
        }
    }
    async findOne(id) {
        try {
            const admin = await this.adminRepo.findByPk(id);
            if (!admin)
                return 'Empty';
            return admin;
        }
        catch (error) {
            throw new Error(`Error finding admin by id ${id}: ${error.message}`);
        }
    }
    async update(id, updateAdminDto) {
        try {
            const [updatedRowsCount, [updatedAdmin]] = await this.adminRepo.update(updateAdminDto, {
                where: { id },
                returning: true,
            });
            if (updatedRowsCount === 0)
                return 'Empty';
            return updatedAdmin;
        }
        catch (error) {
            throw new Error(`Error updating admin with id ${id}: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            const adminRows = await this.adminRepo.destroy({ where: { id } });
            if (adminRows === 0)
                return 'Not found';
            return 'successfully removed';
        }
        catch (error) {
            throw new Error(`Error removing admin with id ${id}: ${error.message}`);
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(admin_model_1.Admin)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        Adminmail_service_1.AdminMailService])
], AdminService);
//# sourceMappingURL=admin.service.js.map