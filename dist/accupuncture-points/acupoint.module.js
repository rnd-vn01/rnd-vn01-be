"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcupointModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const acupoint_controller_1 = require("./acupoint.controller");
const acupoint_en_entity_1 = require("./entities/acupoint-en.entity");
const acupoint_vi_entity_1 = require("./entities/acupoint-vi.entity");
const acupoint_en_service_1 = require("./services/acupoint-en.service");
const acupoint_vi_service_1 = require("./services/acupoint-vi.service");
const providers = [acupoint_en_service_1.AcupointService_en, acupoint_vi_service_1.AcupointService_vi];
let AcupointModule = class AcupointModule {
};
AcupointModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                { name: acupoint_en_entity_1.AcupointsEntity_en.name, schema: acupoint_en_entity_1.AcupointsSchema_en },
            ]),
            mongoose_1.MongooseModule.forFeature([
                { name: acupoint_vi_entity_1.AcupointsEntity_vi.name, schema: acupoint_vi_entity_1.AcupointsSchema_vi },
            ]),
        ],
        controllers: [acupoint_controller_1.AcupointController],
        providers: providers,
        exports: providers,
    })
], AcupointModule);
exports.AcupointModule = AcupointModule;
//# sourceMappingURL=acupoint.module.js.map