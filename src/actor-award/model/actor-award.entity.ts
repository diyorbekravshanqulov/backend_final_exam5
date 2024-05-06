import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Actor } from '../../actor/model/actor.entity';
import { Award } from 'src/award/model/award.entity';

interface IActorAwardCreationAttr {
  actor_id: number;
  award_id: number;
  award_year: number;
}

@Table({ tableName: 'actor-award' })
export class ActorAward extends Model<ActorAward, IActorAwardCreationAttr> {
  @ApiProperty({
    description: 'ID of the actor who received the award',
    type: Number,
    example: 1,
  })
  @ForeignKey(() => Actor)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  actor_id: number;

  @ForeignKey(() => Award)
  @ApiProperty({
    description: 'ID of the award received by the actor',
    type: Number,
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  award_id: number;

  @ApiProperty({
    description: 'Year the award was received',
    type: Number,
    example: 2022,
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  award_year: number;

  @BelongsTo(() => Award)
  awards: Award

  @BelongsTo(() => Actor)
  actors: Actor;
}
