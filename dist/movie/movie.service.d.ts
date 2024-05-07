import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './model/movie.entity';
export declare class MovieService {
    private movieModel;
    constructor(movieModel: typeof Movie);
    create(createMovieDto: CreateMovieDto): Promise<Movie>;
    findAll(): Promise<Movie[]>;
    findOne(id: number): Promise<Movie>;
    update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie>;
    remove(id: number): Promise<"Not found" | "Successfully removed">;
}
