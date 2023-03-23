"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeridiansSchema_vi = exports.MeridiansEntity_vi = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const meridians_en_entity_1 = require("./meridians-en.entity");
let MeridiansEntity_vi = class MeridiansEntity_vi extends meridians_en_entity_1.MeridiansEntity_en {
};
MeridiansEntity_vi = __decorate([
    (0, mongoose_1.Schema)({ collection: 'meridians_vi', timestamps: true })
], MeridiansEntity_vi);
exports.MeridiansEntity_vi = MeridiansEntity_vi;
exports.MeridiansSchema_vi = mongoose_1.SchemaFactory.createForClass(MeridiansEntity_vi);
//# sourceMappingURL=meridians-vi.entity.js.map