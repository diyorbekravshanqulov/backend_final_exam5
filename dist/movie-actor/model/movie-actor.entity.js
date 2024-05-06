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
exports.MovieActor = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const movie_entity_1 = require("../../movie/model/movie.entity");
const actor_entity_1 = require("../../actor/model/actor.entity");
let MovieActor = class MovieActor extends sequelize_typescript_1.Model {
};
exports.MovieActor = MovieActor;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique identifier of the movie-actor relationship',
        example: 1,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], MovieActor.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => movie_entity_1.Movie),
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the movie',
        example: 1,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], MovieActor.prototype, "movie_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => actor_entity_1.Actor),
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the actor',
        example: 1,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], MovieActor.prototype, "actor_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => movie_entity_1.Movie),
    __metadata("design:type", movie_entity_1.Movie)
], MovieActor.prototype, "movies", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => movie_entity_1.Movie),
    __metadata("design:type", actor_entity_1.Actor)
], MovieActor.prototype, "actors", void 0);
exports.MovieActor = MovieActor = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'movie-actor' })
], MovieActor);
//# sourceMappingURL=movie-actor.entity.js.map