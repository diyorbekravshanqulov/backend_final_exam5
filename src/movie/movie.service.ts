import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Movie } from './model/movie.entity';
import { FileService } from '../file/file.service';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie) private movieModel: typeof Movie,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    return this.movieModel.create(createMovieDto)
  }

  async findAll() {
    return this.movieModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.movieModel.findByPk(id);
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = await this.movieModel.update(updateMovieDto, {
      where: { id },
      returning: true,
    });
    return movie[1][0];
  }

  async remove(id: number) {
    const mRows = await this.movieModel.destroy({ where: { id } });
    if (mRows == 0) return 'Not found';
    return 'Successfully removed';
  }
}
