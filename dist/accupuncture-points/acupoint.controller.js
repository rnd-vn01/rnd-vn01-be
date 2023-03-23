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
exports.AcupointController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const language_dto_1 = require("../shared/dtos/language.dto");
const language_enum_1 = require("../shared/enums/language.enum");
const acupoint_request_dto_1 = require("./dtos/acupoint.request.dto");
const acupoint_en_service_1 = require("./services/acupoint-en.service");
const acupoint_vi_service_1 = require("./services/acupoint-vi.service");
let AcupointController = class AcupointController {
    constructor(acupointService_en, acupointService_vi) {
        this.acupointService_en = acupointService_en;
        this.acupointService_vi = acupointService_vi;
    }
    async getAll(req) {
        switch (req.language) {
            case language_enum_1.LanguageEnum.VI:
                return await this.acupointService_vi.findAll();
            case language_enum_1.LanguageEnum.EN:
                return await this.acupointService_en.findAll();
        }
    }
    async getOneByFilter(filter) {
        const { language, code } = filter;
        switch (language) {
            case language_enum_1.LanguageEnum.VI:
                const vi = await this.acupointService_vi.findOne({
                    code: code,
                });
                return vi;
            case language_enum_1.LanguageEnum.EN:
                const en = await this.acupointService_en.findOne({
                    code: code,
                });
                return en;
        }
    }
    async updateAcupoint(query, acupointDto) {
        const { language } = query;
        switch (language) {
            case language_enum_1.LanguageEnum.VI:
                const isUpdated_vi = await this.acupointService_vi.updateByCode(acupointDto.code, acupointDto);
                return isUpdated_vi;
            case language_enum_1.LanguageEnum.EN:
                const isUpdated_en = await this.acupointService_en.updateByCode(acupointDto.code, acupointDto);
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
], AcupointController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('filter'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [acupoint_request_dto_1.GetAcupointRequestDto]),
    __metadata("design:returntype", Promise)
], AcupointController.prototype, "getOneByFilter", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [language_dto_1.LanguageRequestDto,
        acupoint_request_dto_1.UpdateAcupointRequestDto]),
    __metadata("design:returntype", Promise)
], AcupointController.prototype, "updateAcupoint", null);
AcupointController = __decorate([
    (0, swagger_1.ApiTags)('Acupoints'),
    (0, common_1.Controller)('acupoint'),
    __metadata("design:paramtypes", [acupoint_en_service_1.AcupointService_en,
        acupoint_vi_service_1.AcupointService_vi])
], AcupointController);
exports.AcupointController = AcupointController;
//# sourceMappingURL=acupoint.controller.js.map