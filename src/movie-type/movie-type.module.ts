import { Module } from '@nestjs/common';
import { MovieTypeService } from './movie-type.service';
import { MovieTypeController } from './movie-type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MovieType } from './model/movie-type.entity';

@Module({
  imports: [SequelizeModule.forFeature([MovieType])],
  controllers: [MovieTypeController],
  providers: [MovieTypeService],
})
export class MovieTypeModule {}
