import { AwardService } from './award.service';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { Award } from './model/award.entity';
export declare class AwardController {
    private readonly awardService;
    constructor(awardService: AwardService);
    create(createAwardDto: CreateAwardDto): Promise<Award>;
    findAll(): Promise<Award[]>;
    findOne(id: string): Promise<Award>;
    update(id: string, updateAwardDto: UpdateAwardDto): Promise<Award>;
    remove(id: string): Promise<"Not found" | "Successfully removed">;
}
