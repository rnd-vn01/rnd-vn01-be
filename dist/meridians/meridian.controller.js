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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeridianController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const language_dto_1 = require("../shared/dtos/language.dto");
const language_enum_1 = require("../shared/enums/language.enum");
const meridian_request_dto_1 = require("./dtos/meridian.request.dto");
const meridians_en_service_1 = require("./services/meridians-en.service");
const meridians_vi_service_1 = require("./services/meridians-vi.service");
let MeridianController = class MeridianController {
    constructor(meridianService_en, meridianService_vi) {
        this.meridianService_en = meridianService_en;
        this.meridianService_vi = meridianService_vi;
    }
    async getAll(req) {
        const { language } = req;
        switch (language) {
            case language_enum_1.LanguageEnum.VI:
                return await this.meridianService_vi.findAll();
            case language_enum_1.LanguageEnum.EN:
                return await this.meridianService_en.findAll();
        }
    }
    async getOneByFilter(filter) {
        const { language, code } = filter;
        switch (language) {
            case language_enum_1.LanguageEnum.VI:
                const vi = await this.meridianService_vi.findOne({
                    code: code,
                });
                return vi;
            case language_enum_1.LanguageEnum.EN:
                const en = await this.meridianService_en.findOne({
                    code: code,
                });
                return en;
        }
    }
    async updateMeridian(query, updateMeridianReqDto) {
        const { language } = query;
        switch (language) {
            case language_enum_1.LanguageEnum.VI:
                const isUpdated_vi = await this.meridianService_vi.updateByCode(updateMeridianReqDto.code, updateMeridianReqDto);
                return isUpdated_vi;
            case language_enum_1.LanguageEnum.EN:
                const isUpdated_en = await this.meridianService_en.updateByCode(updateMeridianReqDto.code, updateMeridianReqDto);
                return isUpdated_en;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [language_dto_1.LanguageRequestDto]),
    __metadata("design:returntype", Promise)
], MeridianController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('filter'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [meridian_request_dto_1.GetMeridianRequestDto]),
    __metadata("design:returntype", Promise)
], MeridianController.prototype, "getOneByFilter", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [language_dto_1.LanguageRequestDto,
        meridian_request_dto_1.UpdateMeridianRequestDto]),
    __metadata("design:returntype", Promise)
], MeridianController.prototype, "updateMeridian", null);
MeridianController = __decorate([
    (0, swagger_1.ApiTags)('Meridian'),
    (0, common_1.Controller)('meridian'),
    __metadata("design:paramtypes", [meridians_en_service_1.MeridianService_en,
        meridians_vi_service_1.MeridianService_vi])
], MeridianController);
exports.MeridianController = MeridianController;
//# sourceMappingURL=meridian.controller.js.map