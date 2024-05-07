import { Model } from 'sequelize-typescript';
interface IActorCreationAttr {
    full_name: string;
    age: number;
    character: string;
}
export declare class Actor extends Model<Actor, IActorCreationAttr> {
    id: number;
    full_name: string;
    age: number;
    character: string;
}
export {};
