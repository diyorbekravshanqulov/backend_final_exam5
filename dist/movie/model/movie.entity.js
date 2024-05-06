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
exports.Movie = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const language_entity_1 = require("../../language/model/language.entity");
const movie_type_entity_1 = require("../../movie-type/model/movie-type.entity");
let Movie = class Movie extends sequelize_typescript_1.Model {
};
exports.Movie = Movie;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique identifier of the movie',
        example: 1,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL of the movie photo',
        example: 'https://example.com/movie/photo.jpg',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Movie.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title of the movie',
        example: 'Avatar',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Release date of the movie',
        example: '2023-05-25',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: Date.now(),
    }),
    __metadata("design:type", Date)
], Movie.prototype, "release_date", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => language_entity_1.Language),
    (0, swagger_1.ApiProperty)({
        description: 'ID of the language of the movie',
        example: 1,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Movie.prototype, "Language_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Age limit of the movie',
        example: 13,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Movie.prototype, "age_limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Duration of the movie in minutes',
        example: 150,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Movie.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL of the movie video',
        example: 'https://example.com/movie/video.mp4',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Movie.prototype, "video", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => movie_type_entity_1.MovieType),
    (0, swagger_1.ApiProperty)({
        description: 'ID of the movie type',
        example: 1,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Movie.prototype, "movieType_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rating of the movie out of 10',
        example: 8.5,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Movie.prototype, "ratingOfNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => language_entity_1.Language),
    __metadata("design:type", language_entity_1.Language)
], Movie.prototype, "lang", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => movie_type_entity_1.MovieType),
    __metadata("design:type", movie_type_entity_1.MovieType)
], Movie.prototype, "movieTypes", void 0);
exports.Movie = Movie = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'movie' })
], Movie);
//# sourceMappingURL=movie.entity.js.map