"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = __importDefault(require("../middlewares/AuthMiddleware"));
const router = (0, express_1.Router)();
const dishesController_1 = __importDefault(require("../controllers/dishesController"));
router.post("/", AuthMiddleware_1.default, dishesController_1.default.create);
router.get("/", AuthMiddleware_1.default, dishesController_1.default.getAllDish);
router.get("/:id", AuthMiddleware_1.default, dishesController_1.default.getSingleDish);
router.get("/restaurant/:restaurant_id", dishesController_1.default.getDish_Restaurant);
router.get("/combo/:id", dishesController_1.default.getDish_Combo);
router.get("/category/:id", dishesController_1.default.getDish_Category);
router.get("/restaurant", dishesController_1.default.getAllDish_Restaurant);
router.get("/combo/", dishesController_1.default.getAllDish_Combo);
router.get("/category/", dishesController_1.default.getDish_Category);
exports.default = router;