"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    var _a;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('R&D - VN01 - Back-end Staging')
        .setDescription('API Staging for project R&D - VN01')
        .setVersion('1.0')
        .addTag('rnd-vn01-be')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001);
}
bootstrap();
//# sourceMappingURL=main.js.map