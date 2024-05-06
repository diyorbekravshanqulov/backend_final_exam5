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
exports.MovieActorController = void 0;
const common_1 = require("@nestjs/common");
const movie_actor_service_1 = require("./movie-actor.service");
const create_movie_actor_dto_1 = require("./dto/create-movie-actor.dto");
const update_movie_actor_dto_1 = require("./dto/update-movie-actor.dto");
const swagger_1 = require("@nestjs/swagger");
let MovieActorController = class MovieActorController {
    constructor(movieActorService) {
        this.movieActorService = movieActorService;
    }
    create(createMovieActorDto) {
        return this.movieActorService.create(createMovieActorDto);
    }
    findAll() {
        return this.movieActorService.findAll();
    }
    findOne(id) {
        return this.movieActorService.findOne(+id);
    }
    update(id, updateMovieActorDto) {
        return this.movieActorService.update(+id, updateMovieActorDto);
    }
    remove(id) {
        return this.movieActorService.remove(+id);
    }
};
exports.MovieActorController = MovieActorController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new movie-actor relationship' }),
    (0, swagger_1.ApiBody)({ type: create_movie_actor_dto_1.CreateMovieActorDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movie_actor_dto_1.CreateMovieActorDto]),
    __metadata("design:returntype", void 0)
], MovieActorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all movie-actor relationships' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieActorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a movie-actor relationship by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Movie-actor relationship ID',
        type: 'number',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieActorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a movie-actor relationship by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Movie-actor relationship ID',
        type: 'number',
    }),
    (0, swagger_1.ApiBody)({ type: update_movie_actor_dto_1.UpdateMovieActorDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_movie_actor_dto_1.UpdateMovieActorDto]),
    __metadata("design:returntype", void 0)
], MovieActorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a movie-actor relationship by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Movie-actor relationship ID',
        type: 'number',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieActorController.prototype, "remove", null);
exports.MovieActorController = MovieActorController = __decorate([
    (0, swagger_1.ApiTags)('Movie Actors'),
    (0, common_1.Controller)('movie-actor'),
    __metadata("design:paramtypes", [movie_actor_service_1.MovieActorService])
], MovieActorController);
//# sourceMappingURL=movie-actor.controller.js.map