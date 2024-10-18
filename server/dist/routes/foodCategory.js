"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = __importDefault(require("../middlewares/AuthMiddleware"));
const router = (0, express_1.Router)();
const foodCategory_1 = __importDefault(require("../controllers/foodCategory"));
router.post("/", AuthMiddleware_1.default, foodCategory_1.default.create);
router.get("/restaurant/:id", foodCategory_1.default.getCategory_Restaurant);
exports.default = router;
