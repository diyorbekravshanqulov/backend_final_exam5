import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateActorAwardDto } from './dto/create-actor-award.dto';
import { UpdateActorAwardDto } from './dto/update-actor-award.dto';
import { ActorAward } from './model/actor-award.entity';

@Injectable()
export class ActorAwardService {
  constructor(
    @InjectModel(ActorAward)
    private readonly actorAwardModel: typeof ActorAward,
  ) {}

  async create(createActorAwardDto: CreateActorAwardDto) {
    return this.actorAwardModel.create(createActorAwardDto);
  }

  async findAll() {
    return this.actorAwardModel.findAll();
  }

  async findOne(id: number) {
    const actorAward = await this.actorAwardModel.findByPk(id);
    if (!actorAward) {
      throw new NotFoundException(`ActorAward with id ${id} not found`);
    }
    return actorAward;
  }

  async update(id: number, updateActorAwardDto: UpdateActorAwardDto) {
    const [rowsAffected, [updatedActorAward]] =
      await this.actorAwardModel.update(updateActorAwardDto, {
        where: { id },
        returning: true,
      });
    if (rowsAffected === 0) {
      throw new NotFoundException(`ActorAward with id ${id} not found`);
    }
    return updatedActorAward;
  }

  async remove(id: number) {
    const rowsAffected = await this.actorAwardModel.destroy({ where: { id } });
    if (rowsAffected === 0) {
      throw new NotFoundException(`ActorAward with id ${id} not found`);
    }
  }
}
