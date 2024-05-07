import { Model } from 'sequelize-typescript';
interface IAwardCrationAttr {
    award_name: string;
}
export declare class Award extends Model<Award, IAwardCrationAttr> {
    id: number;
    award_name: string;
}
export {};
