import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import AuthRoutes from "./routes/auth"
import DishesRoutes from "./routes/dishes"
import FoodCategoryRoutes from "./routes/foodCategory"
import RestaurantRoutes from "./routes/restaurant"
                    
export const app: Application = express();
const PORT = process.env.PORT || 8080;
                   
// * Middlewares
app.use(cors({
    origin: "*",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", AuthRoutes);
app.use("/api/dish", DishesRoutes)
app.use("/api/food-category", FoodCategoryRoutes)
app.use("/api/restaurant", RestaurantRoutes)





app.get("/", (req: Request, res: Response) => {
    res.send("It's working 🙌");
});





app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
