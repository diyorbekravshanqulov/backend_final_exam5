import { Injectable } from '@nestjs/common';
import { CreateMovieActorDto } from './dto/create-movie-actor.dto';
import { UpdateMovieActorDto } from './dto/update-movie-actor.dto';
import { InjectModel } from '@nestjs/sequelize';
import { MovieActor } from './model/movie-actor.entity';

@Injectable()
export class MovieActorService {
  constructor(
    @InjectModel(MovieActor) private movieActorModel: typeof MovieActor,
  ) {}

  async create(createMovieActorDto: CreateMovieActorDto) {
    return this.movieActorModel.create(createMovieActorDto);
  }

  async findAll() {
    return this.movieActorModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.movieActorModel.findByPk(id);
  }

  async update(id: number, updateMovieActorDto: UpdateMovieActorDto) {
    const mA = await this.movieActorModel.update(updateMovieActorDto, {
      where: { id },
      returning: true,
    });
    return mA[1][0];
  }

  async remove(id: number) {
    const mARows = await this.movieActorModel.destroy({ where: { id } });
    if (mARows == 0) return 'Not found';
    return mARows;
  }
}
