import { CreateMovieTypeDto } from './dto/create-movie-type.dto';
import { UpdateMovieTypeDto } from './dto/update-movie-type.dto';
import { MovieType } from './model/movie-type.entity';
export declare class MovieTypeService {
    private movieTypeModel;
    constructor(movieTypeModel: typeof MovieType);
    create(createMovieTypeDto: CreateMovieTypeDto): Promise<MovieType>;
    findAll(): Promise<MovieType[]>;
    findOne(id: number): Promise<MovieType>;
    update(id: number, updateMovieTypeDto: UpdateMovieTypeDto): Promise<MovieType>;
    remove(id: number): Promise<number | "Not found">;
}
