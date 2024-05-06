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
exports.MovieTypeController = void 0;
const common_1 = require("@nestjs/common");
const movie_type_service_1 = require("./movie-type.service");
const create_movie_type_dto_1 = require("./dto/create-movie-type.dto");
const update_movie_type_dto_1 = require("./dto/update-movie-type.dto");
const swagger_1 = require("@nestjs/swagger");
let MovieTypeController = class MovieTypeController {
    constructor(movieTypeService) {
        this.movieTypeService = movieTypeService;
    }
    create(createMovieTypeDto) {
        return this.movieTypeService.create(createMovieTypeDto);
    }
    findAll() {
        return this.movieTypeService.findAll();
    }
    findOne(id) {
        return this.movieTypeService.findOne(+id);
    }
    update(id, updateMovieTypeDto) {
        return this.movieTypeService.update(+id, updateMovieTypeDto);
    }
    remove(id) {
        return this.movieTypeService.remove(+id);
    }
};
exports.MovieTypeController = MovieTypeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new movie type' }),
    (0, swagger_1.ApiBody)({ type: create_movie_type_dto_1.CreateMovieTypeDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movie_type_dto_1.CreateMovieTypeDto]),
    __metadata("design:returntype", void 0)
], MovieTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all movie types' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a movie type by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Movie type ID', type: 'number' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a movie type by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Movie type ID', type: 'number' }),
    (0, swagger_1.ApiBody)({ type: update_movie_type_dto_1.UpdateMovieTypeDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_movie_type_dto_1.UpdateMovieTypeDto]),
    __metadata("design:returntype", void 0)
], MovieTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a movie type by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Movie type ID', type: 'number' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieTypeController.prototype, "remove", null);
exports.MovieTypeController = MovieTypeController = __decorate([
    (0, swagger_1.ApiTags)('Movie Types'),
    (0, common_1.Controller)('movie-type'),
    __metadata("design:paramtypes", [movie_type_service_1.MovieTypeService])
], MovieTypeController);
//# sourceMappingURL=movie-type.controller.js.map