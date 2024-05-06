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
exports.ActorAwardService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const actor_award_entity_1 = require("./model/actor-award.entity");
let ActorAwardService = class ActorAwardService {
    constructor(actorAwardModel) {
        this.actorAwardModel = actorAwardModel;
    }
    async create(createActorAwardDto) {
        return this.actorAwardModel.create(createActorAwardDto);
    }
    async findAll() {
        return this.actorAwardModel.findAll();
    }
    async findOne(id) {
        const actorAward = await this.actorAwardModel.findByPk(id);
        if (!actorAward) {
            throw new common_1.NotFoundException(`ActorAward with id ${id} not found`);
        }
        return actorAward;
    }
    async update(id, updateActorAwardDto) {
        const [rowsAffected, [updatedActorAward]] = await this.actorAwardModel.update(updateActorAwardDto, {
            where: { id },
            returning: true,
        });
        if (rowsAffected === 0) {
            throw new common_1.NotFoundException(`ActorAward with id ${id} not found`);
        }
        return updatedActorAward;
    }
    async remove(id) {
        const rowsAffected = await this.actorAwardModel.destroy({ where: { id } });
        if (rowsAffected === 0) {
            throw new common_1.NotFoundException(`ActorAward with id ${id} not found`);
        }
    }
};
exports.ActorAwardService = ActorAwardService;
exports.ActorAwardService = ActorAwardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(actor_award_entity_1.ActorAward)),
    __metadata("design:paramtypes", [Object])
], ActorAwardService);
//# sourceMappingURL=actor-award.service.js.map