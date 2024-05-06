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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const movie_entity_1 = require("./model/movie.entity");
const file_service_1 = require("../file/file.service");
let MovieService = class MovieService {
    constructor(movieModel, fileService) {
        this.movieModel = movieModel;
        this.fileService = fileService;
    }
    async create(createMovieDto, photo) {
        console.log(photo);
        const fileName = await this.fileService.saveFile(photo);
        const movie = this.movieModel.create({
            ...createMovieDto,
            photo: fileName,
        });
        return movie;
    }
    async findAll() {
        return this.movieModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        return this.movieModel.findByPk(id);
    }
    async update(id, updateMovieDto) {
        const movie = await this.movieModel.update(updateMovieDto, {
            where: { id },
            returning: true,
        });
        return movie[1][0];
    }
    async remove(id) {
        const mRows = await this.movieModel.destroy({ where: { id } });
        if (mRows == 0)
            return 'Not found';
        return 'Successfully removed';
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(movie_entity_1.Movie)),
    __metadata("design:paramtypes", [Object, file_service_1.FileService])
], MovieService);
//# sourceMappingURL=movie.service.js.map