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
exports.CreateAdminDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAdminDto {
}
exports.CreateAdminDto = CreateAdminDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Full name of the admin',
        example: 'John Doe',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique username of the admin',
        example: 'johndoe123',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Password of the admin',
        example: 'password123',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Confirm password of the admin',
        example: 'password123',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email address of the admin',
        example: 'johndoe@example.com',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Telegram link of the admin',
        example: 'https://t.me/johndoe',
    }),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "tgLink", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPhoneNumber)('UZ'),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "User's phone number (Uzbekistan format)",
    }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "phone", void 0);
//# sourceMappingURL=create-admin.dto.js.map