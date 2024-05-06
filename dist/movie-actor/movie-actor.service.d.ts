import { CreateMovieActorDto } from './dto/create-movie-actor.dto';
import { UpdateMovieActorDto } from './dto/update-movie-actor.dto';
import { MovieActor } from './model/movie-actor.entity';
export declare class MovieActorService {
    private movieActorModel;
    constructor(movieActorModel: typeof MovieActor);
    create(createMovieActorDto: CreateMovieActorDto): Promise<MovieActor>;
    findAll(): Promise<MovieActor[]>;
    findOne(id: number): Promise<MovieActor>;
    update(id: number, updateMovieActorDto: UpdateMovieActorDto): Promise<MovieActor>;
    remove(id: number): Promise<number | "Not found">;
}
