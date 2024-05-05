import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './model/movie.entity';
import { FileModule } from '../file/file.module';

@Module({
  imports: [SequelizeModule.forFeature([Movie]), FileModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
