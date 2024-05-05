import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Actor } from './model/actor.entity';

@Injectable() 
export class ActorService {
  constructor(@InjectModel(Actor) private actorModel: typeof Actor) {}

  async create(createActorDto: CreateActorDto) {
    return await this.actorModel.create(createActorDto);
  }

  async findAll() {
    return await this.actorModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const actor = await this.actorModel.findByPk(id);
    if (!actor) {
      throw new NotFoundException('Actor not found');
    }
    return actor;
  }

  async update(id: number, updateActorDto: UpdateActorDto) {
    const [affectedRowsCount, [updatedActor]] = await this.actorModel.update(
      updateActorDto, 
      {
        where: { id },
        returning: true,
      },
    );
    if (affectedRowsCount === 0) {
      throw new NotFoundException('Actor not found');
    }
    return updatedActor;
  }

  async remove(id: number) {
    const deletedRowCount = await this.actorModel.destroy({ where: { id } });
    if (deletedRowCount === 0) {
      throw new NotFoundException('Actor not found');
    }
    return 'Successfully removed';
  }
}
