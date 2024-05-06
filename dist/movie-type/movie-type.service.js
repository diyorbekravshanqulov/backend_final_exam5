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
exports.MovieTypeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const movie_type_entity_1 = require("./model/movie-type.entity");
let MovieTypeService = class MovieTypeService {
    constructor(movieTypeModel) {
        this.movieTypeModel = movieTypeModel;
    }
    async create(createMovieTypeDto) {
        return this.movieTypeModel.create(createMovieTypeDto);
    }
    async findAll() {
        return this.movieTypeModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        return this.movieTypeModel.findByPk(id);
    }
    async update(id, updateMovieTypeDto) {
        const mt = await this.movieTypeModel.update(updateMovieTypeDto, {
            where: { id },
            returning: true,
        });
        return mt[1][0];
    }
    async remove(id) {
        const mtRows = await this.movieTypeModel.destroy({ where: { id } });
        if (mtRows == 0)
            return 'Not found';
        return mtRows;
    }
};
exports.MovieTypeService = MovieTypeService;
exports.MovieTypeService = MovieTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(movie_type_entity_1.MovieType)),
    __metadata("design:paramtypes", [Object])
], MovieTypeService);
//# sourceMappingURL=movie-type.service.js.map