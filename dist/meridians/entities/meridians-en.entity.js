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
exports.MeridiansSchema_en = exports.MeridiansEntity_en = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const base_entity_1 = require("../../shared/entities/base.entity");
let MeridiansEntity_en = class MeridiansEntity_en extends base_entity_1.BaseEntity {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MeridiansEntity_en.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MeridiansEntity_en.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MeridiansEntity_en.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MeridiansEntity_en.prototype, "diseases", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], MeridiansEntity_en.prototype, "points", void 0);
MeridiansEntity_en = __decorate([
    (0, mongoose_1.Schema)({ collection: 'meridians_en', timestamps: true })
], MeridiansEntity_en);
exports.MeridiansEntity_en = MeridiansEntity_en;
exports.MeridiansSchema_en = mongoose_1.SchemaFactory.createForClass(MeridiansEntity_en);
//# sourceMappingURL=meridians-en.entity.js.map