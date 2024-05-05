import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './admin/model/admin.model';
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
import { Actor } from './actor/model/actor.entity';
import { ActorAward } from './actor-award/model/actor-award.entity';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    // Importing configuration module to load environment variables
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),

    // Setting up Sequelize for database operations
    SequelizeModule.forRoot({
      dialect: 'postgres', // Using PostgreSQL d ialect
      host: process.env.POSTGRES_HOST, // Getting host from environment variables
      port: Number(process.env.POSTGRES_PORT), // Getting port from environment variables
      username: process.env.POSTGRES_USER, // Getting username from environment variables
      password: process.env.POSTGRES_PASSWORD, // Getting password from environment variables
      database: process.env.POSTGRES_DB, // Getting database name from environment variables
      models: [__dirname + 'dist/**/*.model{.ts, .js}'], // Associating Sequelize models with the database
      autoLoadModels: true, // Automatically loading models from the specified paths
      sync: { alter: true }, // Synchronizing database schema with model definitions (altering tables)
      logging: true, // Enabling logging for database operations
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
