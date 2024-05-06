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
exports.Subscription = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const movie_entity_1 = require("../../movie/model/movie.entity");
const user_entity_1 = require("../../user/model/user.entity");
let Subscription = class Subscription extends sequelize_typescript_1.Model {
};
exports.Subscription = Subscription;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique identifier of the subscription',
        example: 1,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Subscription.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => movie_entity_1.Movie),
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the movie subscribed to',
        example: 1,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Subscription.prototype, "movie_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.User),
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the user who subscribed',
        example: 1,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Subscription.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => movie_entity_1.Movie),
    __metadata("design:type", movie_entity_1.Movie)
], Subscription.prototype, "movies", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Subscription.prototype, "users", void 0);
exports.Subscription = Subscription = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'subscription' })
], Subscription);
//# sourceMappingURL=subscription.entity.js.map