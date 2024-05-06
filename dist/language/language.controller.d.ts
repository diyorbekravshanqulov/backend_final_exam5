import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
export declare class LanguageController {
    private readonly languageService;
    constructor(languageService: LanguageService);
    create(createLanguageDto: CreateLanguageDto): Promise<import("./model/language.entity").Language>;
    findAll(): Promise<import("./model/language.entity").Language[]>;
    findOne(id: string): Promise<import("./model/language.entity").Language>;
    update(id: string, updateLanguageDto: UpdateLanguageDto): Promise<import("./model/language.entity").Language>;
    remove(id: string): void;
}
