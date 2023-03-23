"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeridianModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const meridians_en_entity_1 = require("./entities/meridians-en.entity");
const meridians_vi_entity_1 = require("./entities/meridians-vi.entity");
const meridian_controller_1 = require("./meridian.controller");
const meridians_en_service_1 = require("./services/meridians-en.service");
const meridians_vi_service_1 = require("./services/meridians-vi.service");
const providers = [meridians_en_service_1.MeridianService_en, meridians_vi_service_1.MeridianService_vi];
let MeridianModule = class MeridianModule {
};
MeridianModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                { name: meridians_en_entity_1.MeridiansEntity_en.name, schema: meridians_en_entity_1.MeridiansSchema_en },
            ]),
            mongoose_1.MongooseModule.forFeature([
                { name: meridians_vi_entity_1.MeridiansEntity_vi.name, schema: meridians_vi_entity_1.MeridiansSchema_vi },
            ]),
        ],
        controllers: [meridian_controller_1.MeridianController],
        providers: providers,
        exports: providers,
    })
], MeridianModule);
exports.MeridianModule = MeridianModule;
//# sourceMappingURL=meridian.module.js.map