import { CreateActorAwardDto } from './dto/create-actor-award.dto';
import { UpdateActorAwardDto } from './dto/update-actor-award.dto';
import { ActorAward } from './model/actor-award.entity';
export declare class ActorAwardService {
    private readonly actorAwardModel;
    constructor(actorAwardModel: typeof ActorAward);
    create(createActorAwardDto: CreateActorAwardDto): Promise<ActorAward>;
    findAll(): Promise<ActorAward[]>;
    findOne(id: number): Promise<ActorAward>;
    update(id: number, updateActorAwardDto: UpdateActorAwardDto): Promise<ActorAward>;
    remove(id: number): Promise<void>;
}
