import { ActorAwardService } from './actor-award.service';
import { CreateActorAwardDto } from './dto/create-actor-award.dto';
import { UpdateActorAwardDto } from './dto/update-actor-award.dto';
import { ActorAward } from './model/actor-award.entity';
export declare class ActorAwardController {
    private readonly actorAwardService;
    constructor(actorAwardService: ActorAwardService);
    create(createActorAwardDto: CreateActorAwardDto): Promise<ActorAward>;
    findAll(): Promise<ActorAward[]>;
    findOne(id: string): Promise<ActorAward>;
    update(id: string, updateActorAwardDto: UpdateActorAwardDto): Promise<ActorAward>;
    remove(id: string): Promise<void>;
}
