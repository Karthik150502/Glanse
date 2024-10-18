import { Request, Response } from "express";
import prisma from "../config/db.config";



 

export default class DishController {

 
    static async create(req: Request, res: Response) {

        let { name, description, price, isAvailable, created_by, served_by, food_category } = req.body;


        let dish = await prisma.dish.create({
            data: {
                name,
                description,
                price,
                isAvailable,
                created_by,
                served_by,
                food_category
            }
        })


        res.status(200).json({
            status: 200,
            message: "The dish has been created.",
            dish: dish
        });
        return;
    }


    static async getSingleDish(req: Request, res: Response) {
    }
    static async getAllDish(req: Request, res: Response) {
    }




    static async getDish_Restaurant(req: Request, res: Response) {
        let { restaurant_id } = req.params;
        let dishes = await prisma.dish.findMany({
            where: {
                served_by: Number(restaurant_id)
            }
        })

        res.status(200).json({
            status: 200,
            message: "Fetched all the dishes for the restaurant",
            restaurant: restaurant_id,
            dishes: dishes
        });
        return;
    }
    static async getAllDish_Restaurant(req: Request, res: Response) {

    }
    static async getDish_Combo(req: Request, res: Response) {

    }
    static async getAllDish_Combo(req: Request, res: Response) {

    }
    static async getDish_Category(req: Request, res: Response) {

    }
    static async getAllDish_Category(req: Request, res: Response) {

    }

}