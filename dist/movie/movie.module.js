"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModule = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie.service");
const movie_controller_1 = require("./movie.controller");
const sequelize_1 = require("@nestjs/sequelize");
const movie_entity_1 = require("./model/movie.entity");
const file_module_1 = require("../file/file.module");
let MovieModule = class MovieModule {
};
exports.MovieModule = MovieModule;
exports.MovieModule = MovieModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([movie_entity_1.Movie]), file_module_1.FileModule],
        controllers: [movie_controller_1.MovieController],
        providers: [movie_service_1.MovieService],
    })
], MovieModule);
//# sourceMappingURL=movie.module.js.map