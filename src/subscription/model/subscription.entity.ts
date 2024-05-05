import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface ISubscriptionCreationAttr {
  movie_id: number;
  user_id: number;
}

@Table({ tableName: 'subscription' })
export class Subscription extends Model<
  Subscription,
  ISubscriptionCreationAttr
> {
  @ApiProperty({
    description: 'The unique identifier of the subscription',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    description: 'The ID of the movie subscribed to',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
  })
  movie_id: number;

  @ApiProperty({
    description: 'The ID of the user who subscribed',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;
}
