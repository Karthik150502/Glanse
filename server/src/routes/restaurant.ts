import { Router } from "express";
import AuthMiddleware from "../middlewares/AuthMiddleware";
const router = Router();
import RestaurantHandler from "../controllers/restaurant";




router.post("/", AuthMiddleware, RestaurantHandler.create)
router.get("/:id", AuthMiddleware, RestaurantHandler.getAll)



export default router;