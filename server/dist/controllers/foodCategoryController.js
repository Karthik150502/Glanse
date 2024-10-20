"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../config/db.config"));
class FoodCategory {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { name, description, created_by, served_by } = req.body;
            let category = yield db_config_1.default.category.create({
                data: {
                    name,
                    description,
                    created_by,
                    served_by
                }
            });
            res.status(200).json({
                status: 200,
                message: "The Food Category has been added.",
                category: category
            });
            return;
        });
    }
    static getCategory_Restaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.params;
            let categories = yield db_config_1.default.category.findMany({
                where: {
                    served_by: Number(id)
                }
            });
            res.status(200).json({
                status: 200,
                message: "Food categories fetched.",
                categories: categories,
                served_by: id
            });
        });
    }
}
exports.default = FoodCategory;
