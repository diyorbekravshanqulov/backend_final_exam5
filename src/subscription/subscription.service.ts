import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Subscription } from './model/subscription.entity';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel(Subscription) private subsModel: typeof Subscription,
  ) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) {
    return this.subsModel.create(createSubscriptionDto);
  }

  async findAll() {
    return this.subsModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.subsModel.findByPk(id);
  }

  async update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    const subs = await this.subsModel.update(updateSubscriptionDto, {
      where: { id },
      returning: true,
    });
    return subs[1][0];
  }

  async remove(id: number) {
    const subRows = await this.subsModel.destroy({ where: { id } });
    if (subRows == 0) return 'Not found';
    return 'Successfully removed';
  }
}
