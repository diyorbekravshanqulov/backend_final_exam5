import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    create(createMovieDto: CreateMovieDto, photo: any): Promise<import("./model/movie.entity").Movie>;
    findAll(): Promise<import("./model/movie.entity").Movie[]>;
    findOne(id: string): Promise<import("./model/movie.entity").Movie>;
    update(id: string, updateMovieDto: UpdateMovieDto): Promise<import("./model/movie.entity").Movie>;
    remove(id: string): Promise<"Not found" | "Successfully removed">;
}
