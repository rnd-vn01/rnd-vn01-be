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
exports.UpdateMeridianRequestDto = exports.CreateMeridianRequestDto = exports.GetMeridianRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const language_enum_1 = require("../../shared/enums/language.enum");
class GetMeridianRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: language_enum_1.LanguageEnum }),
    (0, class_validator_1.IsEnum)(language_enum_1.LanguageEnum),
    __metadata("design:type", String)
], GetMeridianRequestDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetMeridianRequestDto.prototype, "code", void 0);
exports.GetMeridianRequestDto = GetMeridianRequestDto;
class CreateMeridianRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeridianRequestDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeridianRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeridianRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeridianRequestDto.prototype, "diseases", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], CreateMeridianRequestDto.prototype, "points", void 0);
exports.CreateMeridianRequestDto = CreateMeridianRequestDto;
class UpdateMeridianRequestDto extends (0, swagger_1.PartialType)(CreateMeridianRequestDto) {
}
exports.UpdateMeridianRequestDto = UpdateMeridianRequestDto;
//# sourceMappingURL=meridian.request.dto.js.map