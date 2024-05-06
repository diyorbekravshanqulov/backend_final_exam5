import { Model } from 'sequelize-typescript';
import { Actor } from '../../actor/model/actor.entity';
import { Award } from 'src/award/model/award.entity';
interface IActorAwardCreationAttr {
    actor_id: number;
    award_id: number;
    award_year: number;
}
export declare class ActorAward extends Model<ActorAward, IActorAwardCreationAttr> {
    actor_id: number;
    award_id: number;
    award_year: number;
    awards: Award;
    actors: Actor;
}
export {};
