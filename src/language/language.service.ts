import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from './model/language.entity';

@Injectable()
export class LanguageService {
  constructor(@InjectModel(Language) private languageModel: typeof Language) {}

  async create(createLanguageDto: CreateLanguageDto) {
    return this.languageModel.create(createLanguageDto);
  }

  async findAll() {
    return this.languageModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.languageModel.findByPk(id);
  }

  async update(id: number, updateLanguageDto: UpdateLanguageDto) {
    const lang = await this.languageModel.update(updateLanguageDto, {
      where: { id },
      returning: true,
    });
    return lang[1][0];
  }

  async remove(id: number) {
    const langRows = await this.languageModel.destroy({ where: { id } });
    if (langRows == 0) return 'Not found';
    return 'Successfully removed';
  }
}
