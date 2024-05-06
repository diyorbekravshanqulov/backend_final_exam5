import { Model } from 'sequelize-typescript';
import { Movie } from 'src/movie/model/movie.entity';
import { Actor } from 'src/actor/model/actor.entity';
interface IMovieActorCreationAttr {
    movie_id: number;
    actor_id: number;
}
export declare class MovieActor extends Model<MovieActor, IMovieActorCreationAttr> {
    id: number;
    movie_id: number;
    actor_id: number;
    movies: Movie;
    actors: Actor;
}
export {};
