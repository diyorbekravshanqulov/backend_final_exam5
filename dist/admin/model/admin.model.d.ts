import { Model } from 'sequelize-typescript';
interface AdminCreationAttr {
    fullName: string;
    username: string;
    hashedPassword: string;
    email: string;
    tgLink: string;
    phone: string;
}
export declare class Admin extends Model<Admin, AdminCreationAttr> {
    id: number;
    fullName: string;
    username: string;
    hashedPassword: string;
    email: string;
    tgLink: string;
    phone: string;
    is_active: boolean;
    is_creator: boolean;
    hashedRefreshToken: string;
    activationLink: string;
    length: number;
}
export {};
