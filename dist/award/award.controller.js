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
exports.AwardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const award_service_1 = require("./award.service");
const create_award_dto_1 = require("./dto/create-award.dto");
const update_award_dto_1 = require("./dto/update-award.dto");
let AwardController = class AwardController {
    constructor(awardService) {
        this.awardService = awardService;
    }
    create(createAwardDto) {
        return this.awardService.create(createAwardDto);
    }
    findAll() {
        return this.awardService.findAll();
    }
    findOne(id) {
        return this.awardService.findOne(+id);
    }
    update(id, updateAwardDto) {
        return this.awardService.update(+id, updateAwardDto);
    }
    remove(id) {
        return this.awardService.remove(+id);
    }
};
exports.AwardController = AwardController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new award' }),
    (0, swagger_1.ApiBody)({ type: create_award_dto_1.CreateAwardDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_award_dto_1.CreateAwardDto]),
    __metadata("design:returntype", void 0)
], AwardController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all awards' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AwardController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get an award by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Award ID', type: 'number' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AwardController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing award' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Award ID', type: 'number' }),
    (0, swagger_1.ApiBody)({ type: update_award_dto_1.UpdateAwardDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_award_dto_1.UpdateAwardDto]),
    __metadata("design:returntype", void 0)
], AwardController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an award by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Award ID', type: 'number' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AwardController.prototype, "remove", null);
exports.AwardController = AwardController = __decorate([
    (0, swagger_1.ApiTags)('Awards'),
    (0, common_1.Controller)('award'),
    __metadata("design:paramtypes", [award_service_1.AwardService])
], AwardController);
//# sourceMappingURL=award.controller.js.map