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
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const subscription_entity_1 = require("./model/subscription.entity");
let SubscriptionService = class SubscriptionService {
    constructor(subsModel) {
        this.subsModel = subsModel;
    }
    async create(createSubscriptionDto) {
        return this.subsModel.create(createSubscriptionDto);
    }
    async findAll() {
        return this.subsModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        return this.subsModel.findByPk(id);
    }
    async update(id, updateSubscriptionDto) {
        const subs = await this.subsModel.update(updateSubscriptionDto, {
            where: { id },
            returning: true,
        });
        return subs[1][0];
    }
    async remove(id) {
        const subRows = await this.subsModel.destroy({ where: { id } });
        if (subRows == 0)
            return 'Not found';
        return 'Successfully removed';
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(subscription_entity_1.Subscription)),
    __metadata("design:paramtypes", [Object])
], SubscriptionService);
//# sourceMappingURL=subscription.service.js.map