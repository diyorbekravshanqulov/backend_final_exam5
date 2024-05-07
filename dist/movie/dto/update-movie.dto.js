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
exports.UpdateMovieDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateMovieDto {
}
exports.UpdateMovieDto = UpdateMovieDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'URL of the movie photo',
        example: 'https://example.com/movie/photo.jpg',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMovieDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Title of the movie', example: 'Avatar' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMovieDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Release date of the movie',
        example: '2023-05-25',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMovieDto.prototype, "release_date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID of the language of the movie',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateMovieDto.prototype, "Language_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Age limit of the movie', example: 13 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateMovieDto.prototype, "age_limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Duration of the movie in minutes',
        example: 150,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateMovieDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'URL of the movie video',
        example: 'https://example.com/movie/video.mp4',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMovieDto.prototype, "video", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID of the movie type', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateMovieDto.prototype, "movieType_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rating of the movie out of 10',
        example: 8.5,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(10),
    __metadata("design:type", Number)
], UpdateMovieDto.prototype, "ratingOfNumber", void 0);
//# sourceMappingURL=update-movie.dto.js.map