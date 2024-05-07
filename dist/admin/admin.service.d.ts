import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './model/admin.model';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { LoginAdminDto } from './dto/login_admin.dto';
import { AdminMailService } from '../mail/AdminMail.service';
export declare class AdminService {
    private adminRepo;
    private readonly jwtService;
    private readonly mailService;
    constructor(adminRepo: typeof Admin, jwtService: JwtService, mailService: AdminMailService);
    getTokens(admin: Admin): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    registration(createAdminDto: CreateAdminDto, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    activate(link: string): Promise<{
        message: string;
        admin: boolean;
    }>;
    login(loginAdminDto: LoginAdminDto, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        user_refresh_token: string;
    }>;
    refreshToken(userId: number, refreshToken: string, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    findAll(): Promise<Admin[] | "Empty">;
    findOne(id: number): Promise<Admin | "Empty">;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin | "Empty">;
    remove(id: number): Promise<"Not found" | "successfully removed">;
}
