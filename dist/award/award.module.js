"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwardModule = void 0;
const common_1 = require("@nestjs/common");
const award_service_1 = require("./award.service");
const award_controller_1 = require("./award.controller");
const sequelize_1 = require("@nestjs/sequelize");
const award_entity_1 = require("./model/award.entity");
let AwardModule = class AwardModule {
};
exports.AwardModule = AwardModule;
exports.AwardModule = AwardModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([award_entity_1.Award])],
        controllers: [award_controller_1.AwardController],
        providers: [award_service_1.AwardService],
    })
], AwardModule);
//# sourceMappingURL=award.module.js.map