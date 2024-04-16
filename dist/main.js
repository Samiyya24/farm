"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function start() {
    try {
        const PORT = process.env.PORT || 3333;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.setGlobalPrefix('api');
        app.useGlobalPipes(new common_1.ValidationPipe());
        await app.listen(PORT, () => {
            console.log(`Server ${PORT} portda ishga tushdi`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
start();
//# sourceMappingURL=main.js.map