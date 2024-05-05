import { Module } from '@nestjs/common';
import { MovieActorService } from './movie-actor.service';
import { MovieActorController } from './movie-actor.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MovieActor } from './model/movie-actor.entity';

@Module({
  imports: [SequelizeModule.forFeature([MovieActor])],
  controllers: [MovieActorController],
  providers: [MovieActorService],
})
export class MovieActorModule {}
