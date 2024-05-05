import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { MailModule } from './mail/mail.module';
import { AdminModule } from './admin/admin.module';
import { MovieActorModule } from './movie-actor/movie-actor.module';
import { MovieModule } from './movie/movie.module';
import { MovieTypeModule } from './movie-type/movie-type.module';
import { ActorModule } from './actor/actor.module';
import { ActorAwardModule } from './actor-award/actor-award.module';
import { AwardModule } from './award/award.module';
import { LanguageModule } from './language/language.module';
import { UserModule } from './user/user.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { RatingModule } from './rating/rating.module';
import { FileModule } from './file/file.module';
import { config } from 'process';

@Module({
  imports: [
    // Importing configuration module to load environment variables
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    // Setting up Sequelize for database operations
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        dialect: config.get<'postgres'>('TYPEORM_CONNECTION'),
        host: config.get<string>('TYPEORM_HOST'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        port: config.get<number>('TYPEORM_PORT'),
        database: config.get<string>('TYPEORM_DATABASE'),
        models: [__dirname + 'dist/**/*.model{.ts, .js}'], // Associating Sequelize models with the database
        autoLoadModels: true, // Automatically loading models from the specified paths
        sync: { alter: true }, // Synchronizing database schema with model definitions (altering tables)
        logging: true, // Enabling logging for database operations
      }),
    }),
    MailModule,
    AdminModule,
    FileModule,
    MovieActorModule,
    MovieModule,
    MovieTypeModule,
    ActorModule,
    ActorAwardModule,
    AwardModule,
    LanguageModule,
    UserModule,
    SubscriptionModule,
    RatingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
