import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './model/movie.entity';
import { FileService } from '../file/file.service';
export declare class MovieService {
    private movieModel;
    private readonly fileService;
    constructor(movieModel: typeof Movie, fileService: FileService);
    create(createMovieDto: CreateMovieDto, photo: any): Promise<Movie>;
    findAll(): Promise<Movie[]>;
    findOne(id: number): Promise<Movie>;
    update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie>;
    remove(id: number): Promise<"Not found" | "Successfully removed">;
}
