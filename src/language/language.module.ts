import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './model/language.entity';

@Module({
  imports: [SequelizeModule.forFeature([Language])],
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class LanguageModule {}
