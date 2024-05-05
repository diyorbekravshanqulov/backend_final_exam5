import { Injectable } from '@nestjs/common';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Award } from './model/award.entity';

@Injectable()
export class AwardService {
  constructor(@InjectModel(Award) private awardModel: typeof Award) {}

  async create(createAwardDto: CreateAwardDto) {
    return this.awardModel.create(createAwardDto);
  }

  async findAll() {
    return this.awardModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.awardModel.findByPk(id);
  }

  async update(id: number, updateAwardDto: UpdateAwardDto) {
    const award = await this.awardModel.update(updateAwardDto, {
      where: { id },
      returning: true,
    });
    return award[1][0];
  }

  async remove(id: number) {
    const aRows = await this.awardModel.destroy({ where: { id } });
    if (aRows == 0) return 'Not found';
    return 'Successfully removed';
  }
}
