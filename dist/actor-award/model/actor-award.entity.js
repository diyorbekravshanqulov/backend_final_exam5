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
exports.ActorAward = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const actor_entity_1 = require("../../actor/model/actor.entity");
const award_entity_1 = require("../../award/model/award.entity");
let ActorAward = class ActorAward extends sequelize_typescript_1.Model {
};
exports.ActorAward = ActorAward;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the actor who received the award',
        type: Number,
        example: 1,
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => actor_entity_1.Actor),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ActorAward.prototype, "actor_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => award_entity_1.Award),
    (0, swagger_1.ApiProperty)({
        description: 'ID of the award received by the actor',
        type: Number,
        example: 1,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ActorAward.prototype, "award_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Year the award was received',
        type: Number,
        example: 2022,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ActorAward.prototype, "award_year", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => award_entity_1.Award),
    __metadata("design:type", award_entity_1.Award)
], ActorAward.prototype, "awards", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => actor_entity_1.Actor),
    __metadata("design:type", actor_entity_1.Actor)
], ActorAward.prototype, "actors", void 0);
exports.ActorAward = ActorAward = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'actor-award' })
], ActorAward);
//# sourceMappingURL=actor-award.entity.js.map