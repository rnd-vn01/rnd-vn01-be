"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcupointsSchema_en = exports.AcupointsEntity_en = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const base_entity_1 = require("../../shared/entities/base.entity");
let AcupointsEntity_en = class AcupointsEntity_en extends base_entity_1.BaseEntity {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AcupointsEntity_en.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AcupointsEntity_en.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AcupointsEntity_en.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AcupointsEntity_en.prototype, "anatomy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AcupointsEntity_en.prototype, "technique", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], AcupointsEntity_en.prototype, "functionalities", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AcupointsEntity_en.prototype, "caution", void 0);
AcupointsEntity_en = __decorate([
    (0, mongoose_1.Schema)({ collection: 'acupoints_en', timestamps: true })
], AcupointsEntity_en);
exports.AcupointsEntity_en = AcupointsEntity_en;
exports.AcupointsSchema_en = mongoose_1.SchemaFactory.createForClass(AcupointsEntity_en);
//# sourceMappingURL=acupoint-en.entity.js.map