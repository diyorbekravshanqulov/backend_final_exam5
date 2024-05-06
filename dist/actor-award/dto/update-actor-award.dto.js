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
exports.UpdateActorAwardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateActorAwardDto {
}
exports.UpdateActorAwardDto = UpdateActorAwardDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID of the actor who received the award',
        type: Number,
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], UpdateActorAwardDto.prototype, "actor_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID of the award received by the actor',
        type: Number,
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], UpdateActorAwardDto.prototype, "award_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Year the award was received',
        type: Number,
        example: 2022,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1900),
    __metadata("design:type", Number)
], UpdateActorAwardDto.prototype, "award_year", void 0);
//# sourceMappingURL=update-actor-award.dto.js.map