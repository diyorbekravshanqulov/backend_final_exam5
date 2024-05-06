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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminMailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let AdminMailService = class AdminMailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendMail(admin) {
        const url = `${process.env.TYPEORM_HOST}:${process.env.API_PORT}/admin/activate/${admin.activationLink}`;
        console.log(url);
        await this.mailerService.sendMail({
            to: admin.email,
            subject: 'Welcome to stadium app! Confirmation your email',
            template: './confirmation',
            context: {
                name: admin.fullName,
                url,
            },
        });
    }
};
exports.AdminMailService = AdminMailService;
exports.AdminMailService = AdminMailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], AdminMailService);
//# sourceMappingURL=Adminmail.service.js.map