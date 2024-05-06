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
exports.MovieType = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
let MovieType = class MovieType extends sequelize_typescript_1.Model {
};
exports.MovieType = MovieType;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique identifier of the movie type',
        example: 1,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], MovieType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The type of the movie',
        example: 'Action',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], MovieType.prototype, "type", void 0);
exports.MovieType = MovieType = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'movie-type' })
], MovieType);
//# sourceMappingURL=movie-type.entity.js.map