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
exports.MovieActorService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const movie_actor_entity_1 = require("./model/movie-actor.entity");
let MovieActorService = class MovieActorService {
    constructor(movieActorModel) {
        this.movieActorModel = movieActorModel;
    }
    async create(createMovieActorDto) {
        return this.movieActorModel.create(createMovieActorDto);
    }
    async findAll() {
        return this.movieActorModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        return this.movieActorModel.findByPk(id);
    }
    async update(id, updateMovieActorDto) {
        const mA = await this.movieActorModel.update(updateMovieActorDto, {
            where: { id },
            returning: true,
        });
        return mA[1][0];
    }
    async remove(id) {
        const mARows = await this.movieActorModel.destroy({ where: { id } });
        if (mARows == 0)
            return 'Not found';
        return mARows;
    }
};
exports.MovieActorService = MovieActorService;
exports.MovieActorService = MovieActorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(movie_actor_entity_1.MovieActor)),
    __metadata("design:paramtypes", [Object])
], MovieActorService);
//# sourceMappingURL=movie-actor.service.js.map