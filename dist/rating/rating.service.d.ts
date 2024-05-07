import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating } from './model/rating.entity';
export declare class RatingService {
    private ratingModel;
    constructor(ratingModel: typeof Rating);
    create(createRatingDto: CreateRatingDto): Promise<Rating>;
    findAll(): Promise<Rating[]>;
    findOne(id: number): Promise<Rating>;
    update(id: number, updateRatingDto: UpdateRatingDto): Promise<Rating>;
    remove(id: number): Promise<"Not found" | "Successfully removed">;
}
