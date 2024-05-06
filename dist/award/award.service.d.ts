import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { Award } from './model/award.entity';
export declare class AwardService {
    private awardModel;
    constructor(awardModel: typeof Award);
    create(createAwardDto: CreateAwardDto): Promise<Award>;
    findAll(): Promise<Award[]>;
    findOne(id: number): Promise<Award>;
    update(id: number, updateAwardDto: UpdateAwardDto): Promise<Award>;
    remove(id: number): Promise<"Not found" | "Successfully removed">;
}
