import { Router } from "express";
import AuthMiddleware from "../middlewares/AuthMiddleware";
const router = Router();
import DishController from "../controllers/dishesController";




router.post("/", AuthMiddleware, DishController.create);
router.put("/", AuthMiddleware, DishController.edit);
router.delete("/", AuthMiddleware, DishController.delete);

router.get("/", AuthMiddleware, DishController.getAllDish)

router.get("/:id", AuthMiddleware, DishController.getSingleDish)

router.get("/restaurant/:restaurant_id", DishController.getDish_Restaurant)
router.get("/combo/:id", DishController.getDish_Combo)
router.get("/category/:id", DishController.getDish_Category)
router.get("/restaurant", DishController.getAllDish_Restaurant)
router.get("/combo/", DishController.getAllDish_Combo)
router.get("/category/", DishController.getDish_Category)



export default router;