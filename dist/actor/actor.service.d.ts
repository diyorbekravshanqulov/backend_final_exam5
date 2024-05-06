import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { Actor } from './model/actor.entity';
export declare class ActorService {
    private actorModel;
    constructor(actorModel: typeof Actor);
    create(createActorDto: CreateActorDto): Promise<Actor>;
    findAll(): Promise<Actor[]>;
    findOne(id: number): Promise<Actor>;
    update(id: number, updateActorDto: UpdateActorDto): Promise<Actor>;
    remove(id: number): Promise<string>;
}
