import { Model } from 'sequelize-typescript';
import { Movie } from 'src/movie/model/movie.entity';
import { User } from 'src/user/model/user.entity';
interface IRatingCreationAttr {
    movie_id: number;
    user_id: number;
}
export declare class Rating extends Model<Rating, IRatingCreationAttr> {
    id: number;
    movie_id: number;
    user_id: number;
    movies: Movie;
    users: User;
}
export {};
