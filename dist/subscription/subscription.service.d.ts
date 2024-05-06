import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription } from './model/subscription.entity';
export declare class SubscriptionService {
    private subsModel;
    constructor(subsModel: typeof Subscription);
    create(createSubscriptionDto: CreateSubscriptionDto): Promise<Subscription>;
    findAll(): Promise<Subscription[]>;
    findOne(id: number): Promise<Subscription>;
    update(id: number, updateSubscriptionDto: UpdateSubscriptionDto): Promise<Subscription>;
    remove(id: number): Promise<"Not found" | "Successfully removed">;
}
