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
class RestaurantHandler {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { name, description, owned_by, location } = req.body;
            let restaurant = yield db_config_1.default.restaurant.create({
                data: {
                    name,
                    description,
                    owned_by,
                    location
                }
            });
            res.status(200).json({
                status: 200,
                message: "The Restaurant has been added.",
                restaurant: restaurant
            });
            return;
        });
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.params;
            let restaurants = yield db_config_1.default.restaurant.findMany({
                where: {
                    owned_by: Number(id)
                }
            });
            res.status(200).json({
                status: 200,
                message: "All the Restaurants have been fetched.",
                restaurants: restaurants
            });
            return;
        });
    }
}
exports.default = RestaurantHandler;
