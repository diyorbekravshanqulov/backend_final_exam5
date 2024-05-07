import { Model } from 'sequelize-typescript';
interface IUserCreationAttr {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    age: number;
    subscription: boolean;
}
export declare class User extends Model<User, IUserCreationAttr> {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    age: number;
    subscription: boolean;
}
export {};
