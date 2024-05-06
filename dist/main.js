"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const logger_factory_1 = require("./logger/logger_factory");
async function start() {
    try {
        const PORT = process.env.API_PORT || 3030;
        const app = await core_1.NestFactory.create(app_module_1.AppModule, {
            logger: (0, logger_factory_1.LoggerFactory)('Final Exam 5'),
        });
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Backend final_exam Project')
            .setDescription('Search Film REST API')
            .setVersion('1.0')
            .addTag('NestJS, Nodejs, Postgres, Exam_4, Sequezlize, Swagger, Mailer')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('docs', app, document);
        app.use(cookieParser());
        app.useGlobalPipes(new common_1.ValidationPipe());
        await app.listen(PORT);
        console.log(`Server is running on http://localhost:${PORT}`);
    }
    catch (error) {
        console.error('Error starting server:', error);
    }
}
start();
//# sourceMappingURL=main.js.map