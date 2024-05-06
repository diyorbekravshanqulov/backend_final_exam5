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
exports.LanguageService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const language_entity_1 = require("./model/language.entity");
let LanguageService = class LanguageService {
    constructor(languageModel) {
        this.languageModel = languageModel;
    }
    async create(createLanguageDto) {
        return this.languageModel.create(createLanguageDto);
    }
    async findAll() {
        return this.languageModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        return this.languageModel.findByPk(id);
    }
    async update(id, updateLanguageDto) {
        const lang = await this.languageModel.update(updateLanguageDto, {
            where: { id },
            returning: true,
        });
        return lang[1][0];
    }
    async remove(id) {
        const langRows = await this.languageModel.destroy({ where: { id } });
        if (langRows == 0)
            return 'Not found';
        return 'Successfully removed';
    }
};
exports.LanguageService = LanguageService;
exports.LanguageService = LanguageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(language_entity_1.Language)),
    __metadata("design:paramtypes", [Object])
], LanguageService);
//# sourceMappingURL=language.service.js.map