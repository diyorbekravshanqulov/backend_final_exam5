import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { Actor } from './model/actor.entity';
export declare class ActorController {
    private readonly actorService;
    constructor(actorService: ActorService);
    create(createActorDto: CreateActorDto): Promise<Actor>;
    findAll(): Promise<Actor[]>;
    findOne(id: string): Promise<Actor>;
    update(id: string, updateActorDto: UpdateActorDto): Promise<Actor>;
    remove(id: string): Promise<string>;
}
