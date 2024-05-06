import { MailerService } from '@nestjs-modules/mailer';
import { Admin } from '../admin/model/admin.model';
export declare class AdminMailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendMail(admin: Admin): Promise<void>;
}
