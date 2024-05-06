import { MovieTypeService } from './movie-type.service';
import { CreateMovieTypeDto } from './dto/create-movie-type.dto';
import { UpdateMovieTypeDto } from './dto/update-movie-type.dto';
export declare class MovieTypeController {
    private readonly movieTypeService;
    constructor(movieTypeService: MovieTypeService);
    create(createMovieTypeDto: CreateMovieTypeDto): Promise<import("./model/movie-type.entity").MovieType>;
    findAll(): Promise<import("./model/movie-type.entity").MovieType[]>;
    findOne(id: string): Promise<import("./model/movie-type.entity").MovieType>;
    update(id: string, updateMovieTypeDto: UpdateMovieTypeDto): Promise<import("./model/movie-type.entity").MovieType>;
    remove(id: string): Promise<number | "Not found">;
}
