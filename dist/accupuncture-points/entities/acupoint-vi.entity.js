"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcupointsSchema_vi = exports.AcupointsEntity_vi = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const acupoint_en_entity_1 = require("./acupoint-en.entity");
let AcupointsEntity_vi = class AcupointsEntity_vi extends acupoint_en_entity_1.AcupointsEntity_en {
};
AcupointsEntity_vi = __decorate([
    (0, mongoose_1.Schema)({ collection: 'acupoints_vi', timestamps: true })
], AcupointsEntity_vi);
exports.AcupointsEntity_vi = AcupointsEntity_vi;
exports.AcupointsSchema_vi = mongoose_1.SchemaFactory.createForClass(AcupointsEntity_vi);
//# sourceMappingURL=acupoint-vi.entity.js.map