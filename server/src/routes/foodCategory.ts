import { Router } from "express";
import AuthMiddleware from "../middlewares/AuthMiddleware";
const router = Router();
import FoodCategory from "../controllers/foodCategory";




router.post("/", AuthMiddleware, FoodCategory.create)
router.get("/restaurant/:id", FoodCategory.getCategory_Restaurant)





export default router;