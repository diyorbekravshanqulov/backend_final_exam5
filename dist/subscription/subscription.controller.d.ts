import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
export declare class SubscriptionController {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    create(createSubscriptionDto: CreateSubscriptionDto): Promise<import("./model/subscription.entity").Subscription>;
    findAll(): Promise<import("./model/subscription.entity").Subscription[]>;
    findOne(id: string): Promise<import("./model/subscription.entity").Subscription>;
    update(id: string, updateSubscriptionDto: UpdateSubscriptionDto): Promise<import("./model/subscription.entity").Subscription>;
    remove(id: string): Promise<"Not found" | "Successfully removed">;
}
