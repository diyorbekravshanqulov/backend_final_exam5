import { Model } from 'sequelize-typescript';
interface IMovieTypeCreationAttr {
    type: string;
}
export declare class MovieType extends Model<MovieType, IMovieTypeCreationAttr> {
    id: number;
    type: string;
}
export {};
