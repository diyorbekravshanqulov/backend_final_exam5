import { Model } from 'sequelize-typescript';
import { Language } from 'src/language/model/language.entity';
interface IMovieCreationAttr {
    photo: string;
    title: string;
    release_date: string;
    Language_id: number;
    age_limit: number;
    duration: number;
    video: string;
    movieType_id: number;
    ratingOfNumber: number;
}
export declare class Movie extends Model<Movie, IMovieCreationAttr> {
    id: number;
    photo: string;
    title: string;
    release_date: string;
    Language_id: number;
    age_limit: number;
    duration: number;
    video: string;
    movieType_id: number;
    ratingOfNumber: number;
    lang: Language;
}
export {};
