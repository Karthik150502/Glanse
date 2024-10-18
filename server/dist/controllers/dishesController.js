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
class DishController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { name, description, price, isAvailable, created_by, served_by, food_category } = req.body;
            let dish = yield db_config_1.default.dish.create({
                data: {
                    name,
                    description,
                    price,
                    isAvailable,
                    created_by,
                    served_by,
                    food_category
                }
            });
            res.status(200).json({
                status: 200,
                message: "The dish has been created.",
                dish: dish
            });
            return;
        });
    }
    static getSingleDish(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getAllDish(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getDish_Restaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { restaurant_id } = req.params;
            let dishes = yield db_config_1.default.dish.findMany({
                where: {
                    served_by: Number(restaurant_id)
                }
            });
            res.status(200).json({
                status: 200,
                message: "Fetched all the dishes for the restaurant",
                restaurant: restaurant_id,
                dishes: dishes
            });
            return;
        });
    }
    static getAllDish_Restaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getDish_Combo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getAllDish_Combo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getDish_Category(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getAllDish_Category(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = DishController;
