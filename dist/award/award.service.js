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
exports.AwardService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const award_entity_1 = require("./model/award.entity");
let AwardService = class AwardService {
    constructor(awardModel) {
        this.awardModel = awardModel;
    }
    async create(createAwardDto) {
        return this.awardModel.create(createAwardDto);
    }
    async findAll() {
        return this.awardModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        return this.awardModel.findByPk(id);
    }
    async update(id, updateAwardDto) {
        const award = await this.awardModel.update(updateAwardDto, {
            where: { id },
            returning: true,
        });
        return award[1][0];
    }
    async remove(id) {
        const aRows = await this.awardModel.destroy({ where: { id } });
        if (aRows == 0)
            return 'Not found';
        return 'Successfully removed';
    }
};
exports.AwardService = AwardService;
exports.AwardService = AwardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(award_entity_1.Award)),
    __metadata("design:paramtypes", [Object])
], AwardService);
//# sourceMappingURL=award.service.js.map