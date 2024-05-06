import { MovieActorService } from './movie-actor.service';
import { CreateMovieActorDto } from './dto/create-movie-actor.dto';
import { UpdateMovieActorDto } from './dto/update-movie-actor.dto';
export declare class MovieActorController {
    private readonly movieActorService;
    constructor(movieActorService: MovieActorService);
    create(createMovieActorDto: CreateMovieActorDto): Promise<import("./model/movie-actor.entity").MovieActor>;
    findAll(): Promise<import("./model/movie-actor.entity").MovieActor[]>;
    findOne(id: string): Promise<import("./model/movie-actor.entity").MovieActor>;
    update(id: string, updateMovieActorDto: UpdateMovieActorDto): Promise<import("./model/movie-actor.entity").MovieActor>;
    remove(id: string): Promise<number | "Not found">;
}
