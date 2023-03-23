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
exports.UpdateAcupointRequestDto = exports.CreateAcupointRequestDto = exports.GetAcupointRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const language_enum_1 = require("../../shared/enums/language.enum");
class GetAcupointRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: language_enum_1.LanguageEnum }),
    (0, class_validator_1.IsEnum)(language_enum_1.LanguageEnum),
    __metadata("design:type", String)
], GetAcupointRequestDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAcupointRequestDto.prototype, "code", void 0);
exports.GetAcupointRequestDto = GetAcupointRequestDto;
class CreateAcupointRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAcupointRequestDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAcupointRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAcupointRequestDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAcupointRequestDto.prototype, "anatomy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAcupointRequestDto.prototype, "technique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], CreateAcupointRequestDto.prototype, "functionalities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAcupointRequestDto.prototype, "caution", void 0);
exports.CreateAcupointRequestDto = CreateAcupointRequestDto;
class UpdateAcupointRequestDto extends (0, swagger_1.PartialType)(CreateAcupointRequestDto) {
}
exports.UpdateAcupointRequestDto = UpdateAcupointRequestDto;
//# sourceMappingURL=acupoint.request.dto.js.map