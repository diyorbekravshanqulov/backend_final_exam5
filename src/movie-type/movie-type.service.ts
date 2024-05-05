import { Injectable } from '@nestjs/common';
import { CreateMovieTypeDto } from './dto/create-movie-type.dto';
import { UpdateMovieTypeDto } from './dto/update-movie-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { MovieType } from './model/movie-type.entity';

@Injectable()
export class MovieTypeService {
  constructor(
    @InjectModel(MovieType) private movieTypeModel: typeof MovieType,
  ) {}

  async create(createMovieTypeDto: CreateMovieTypeDto) {
    return this.movieTypeModel.create(createMovieTypeDto);
  }

  async findAll() {
    return this.movieTypeModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.movieTypeModel.findByPk(id);
  }

  async update(id: number, updateMovieTypeDto: UpdateMovieTypeDto) {
    const mt = await this.movieTypeModel.update(updateMovieTypeDto, {
      where: { id },
      returning: true,
    });
    return mt[1][0];
  }

  async remove(id: number) {
    const mtRows = await this.movieTypeModel.destroy({ where: { id } });
    if (mtRows == 0) return 'Not found';
    return mtRows;
  }
}
