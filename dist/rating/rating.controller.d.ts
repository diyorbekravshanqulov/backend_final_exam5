import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    create(createRatingDto: CreateRatingDto): Promise<import("./model/rating.entity").Rating>;
    findAll(): Promise<import("./model/rating.entity").Rating[]>;
    findOne(id: string): Promise<import("./model/rating.entity").Rating>;
    update(id: string, updateRatingDto: UpdateRatingDto): Promise<import("./model/rating.entity").Rating>;
    remove(id: string): Promise<"Not found" | "Successfully removed">;
}
