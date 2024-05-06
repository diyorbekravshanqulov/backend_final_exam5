import { Model } from 'sequelize-typescript';
interface ILanguageCreationAttr {
    language: string;
}
export declare class Language extends Model<Language, ILanguageCreationAttr> {
    id: number;
    language: string;
}
export {};
