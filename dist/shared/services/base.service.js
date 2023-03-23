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
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let BaseService = class BaseService {
    constructor(model) {
        this.model = model;
        for (const modelName of Object.keys(model.collection.conn.models)) {
            if (model.collection.conn.models[modelName] === this.model) {
                this.modelName = modelName;
                break;
            }
        }
    }
    async create(dto) {
        const newObj = await this.model.create(Object.assign({}, dto));
        if (!newObj) {
            throw Error(`Cannot create new ${this.modelName}`);
        }
        return newObj;
    }
    async update(id, updateDto) {
        const updateObject = await this.model.updateOne({ _id: id }, { $set: updateDto });
        return updateObject.acknowledged;
    }
    async findAll() {
        const objects = await this.model.find().exec();
        return objects;
    }
    async find(conditions) {
        const test = conditions;
        return await this.model.find(conditions).exec();
    }
    async findOne(conditions) {
        const object = await this.model.findOne(conditions);
        return object;
    }
    async getById(id) {
        return await this.model.findOne({ _id: id }).exec();
    }
    async getByIds(ids) {
        return await this.model.find({ _id: { $in: ids } }).exec();
    }
    async updateByCode(code, updateDto) {
        const updateObject = await this.model.replaceOne({ "code": code }, updateDto);
        return updateObject.acknowledged;
    }
    async remove(id) {
        const object = await this.model.findOne({ _id: id }).exec();
        const deletedObject = await this.model.deleteOne({ _id: id });
        return deletedObject.deletedCount > 0;
    }
};
BaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map