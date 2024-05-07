import { Model } from 'sequelize-typescript';
import { User } from 'src/user/model/user.entity';
interface IRatingCreationAttr {
    movie_id: number;
    user_id: number;
}
export declare class Rating extends Model<Rating, IRatingCreationAttr> {
    id: number;
    movie_id: number;
    user_id: number;
    users: User;
}
export {};
