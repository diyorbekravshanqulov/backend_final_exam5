"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const mail_module_1 = require("./mail/mail.module");
const admin_module_1 = require("./admin/admin.module");
const movie_actor_module_1 = require("./movie-actor/movie-actor.module");
const movie_module_1 = require("./movie/movie.module");
const movie_type_module_1 = require("./movie-type/movie-type.module");
const actor_module_1 = require("./actor/actor.module");
const actor_award_module_1 = require("./actor-award/actor-award.module");
const award_module_1 = require("./award/award.module");
const language_module_1 = require("./language/language.module");
const user_module_1 = require("./user/user.module");
const subscription_module_1 = require("./subscription/subscription.module");
const rating_module_1 = require("./rating/rating.module");
const file_module_1 = require("./file/file.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (config) => ({
                    dialect: config.get('TYPEORM_CONNECTION'),
                    host: config.get('TYPEORM_HOST'),
                    username: config.get('TYPEORM_USERNAME'),
                    password: config.get('TYPEORM_PASSWORD'),
                    port: config.get('TYPEORM_PORT'),
                    database: config.get('TYPEORM_DATABASE'),
                    models: [__dirname + 'dist/**/*.model{.ts, .js}'],
                    autoLoadModels: true,
                    sync: { alter: true },
                    logging: true,
                }),
            }),
            mail_module_1.MailModule,
            admin_module_1.AdminModule,
            file_module_1.FileModule,
            movie_actor_module_1.MovieActorModule,
            movie_module_1.MovieModule,
            movie_type_module_1.MovieTypeModule,
            actor_module_1.ActorModule,
            actor_award_module_1.ActorAwardModule,
            award_module_1.AwardModule,
            language_module_1.LanguageModule,
            user_module_1.UserModule,
            subscription_module_1.SubscriptionModule,
            rating_module_1.RatingModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map