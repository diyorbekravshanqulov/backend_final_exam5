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
exports.ActorService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const actor_entity_1 = require("./model/actor.entity");
let ActorService = class ActorService {
    constructor(actorModel) {
        this.actorModel = actorModel;
    }
    async create(createActorDto) {
        return await this.actorModel.create(createActorDto);
    }
    async findAll() {
        return await this.actorModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const actor = await this.actorModel.findByPk(id);
        if (!actor) {
            throw new common_1.NotFoundException('Actor not found');
        }
        return actor;
    }
    async update(id, updateActorDto) {
        const [affectedRowsCount, [updatedActor]] = await this.actorModel.update(updateActorDto, {
            where: { id },
            returning: true,
        });
        if (affectedRowsCount === 0) {
            throw new common_1.NotFoundException('Actor not found');
        }
        return updatedActor;
    }
    async remove(id) {
        const deletedRowCount = await this.actorModel.destroy({ where: { id } });
        if (deletedRowCount === 0) {
            throw new common_1.NotFoundException('Actor not found');
        }
        return 'Successfully removed';
    }
};
exports.ActorService = ActorService;
exports.ActorService = ActorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(actor_entity_1.Actor)),
    __metadata("design:paramtypes", [Object])
], ActorService);
//# sourceMappingURL=actor.service.js.map