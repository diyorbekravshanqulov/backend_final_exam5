import { forwardRef, Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subscription } from './model/subscription.entity';
import { User } from 'src/user/model/user.entity';
import { Movie } from 'src/movie/model/movie.entity';
import { MovieService } from '../movie/movie.service';
import { UserService } from '../user/user.service';

@Module({
  imports: [SequelizeModule.forFeature([Subscription])],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
})
export class SubscriptionModule {}
