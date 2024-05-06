import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminService } from './admin.service';
import { Response } from 'express';
import { Admin } from './model/admin.model';
import { LoginAdminDto } from './dto/login_admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    registration(createAdminDto: CreateAdminDto, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    login(loginAdminDto: LoginAdminDto, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        user_refresh_token: string;
    }>;
    refresh(id: number, refreshToken: string, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    activate(link: string): Promise<{
        message: string;
        admin: boolean;
    }>;
    findAll(): Promise<Admin[] | "Empty">;
    findOne(id: string): Promise<Admin | "Empty">;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin | "Empty">;
    remove(id: string): Promise<"Not found" | "successfully removed">;
}
