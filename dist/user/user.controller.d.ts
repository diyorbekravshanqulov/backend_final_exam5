import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./model/user.entity").User>;
    findAll(): Promise<import("./model/user.entity").User[]>;
    findOne(id: string): Promise<import("./model/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./model/user.entity").User>;
    remove(id: string): Promise<"Not found" | "Successfully removed">;
}
