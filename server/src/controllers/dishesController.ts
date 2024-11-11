import { Request, Response } from "express";
import prisma from "../config/db.config";
import { S3Handler } from "../packages/aws/s3-main";





export default class DishController {


    static async create(req: Request, res: Response) {

        let { name, description, price, isAvailable, created_by, served_by, food_category, image, imageKey } = req.body;


        let dish = await prisma.dish.create({
            data: {
                name,
                description,
                price,
                isAvailable,
                created_by,
                served_by,
                food_category,
                image,
                imageKey
            }
        })


        res.status(200).json({
            status: 200,
            message: "The dish has been created.",
            dish: dish
        });
        return;
    }




    static async delete(req: Request, res: Response) {

        let { id } = req.query;


        let dish = await prisma.dish.delete({
            where: { id: Number(id) }
        })

        let imageDeleted: boolean | void = false;
        if (dish.imageKey) {
            let s3 = S3Handler.getInstance();
            imageDeleted = await s3.deletObject(dish.imageKey);
        }


        res.status(200).json({
            status: 200,
            message: "The dish has been deleted.",
            isImageDeleted: imageDeleted,
            dish: dish
        });
        return;
    }


    static async edit(req: Request, res: Response) {

        let { name, description, price, isAvailable, food_category, image, imageKey, id } = req.body;


        let dish = await prisma.dish.update({
            data: {
                name,
                description,
                price,
                isAvailable,
                food_category,
                image,
                imageKey,
            }, where: {
                id
            }
        })


        res.status(200).json({
            status: 200,
            message: "The dish has edited successfully.",
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
            },
            orderBy: {
                updated_at: "desc"
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


    static async getDish_RestaurantCat(req: Request, res: Response) {
        let { restaurantId, category } = req.body;
        console.log({ restaurantId, category })
        let dishes = await prisma.dish.findMany({
            where: {
                served_by: Number(restaurantId),
                food_category: category
            },
            orderBy: {
                updated_at: "desc"
            }
        })

        res.status(200).json({
            status: 200,
            message: "Fetched all the dishes for the Restaurant Category",
            restaurant: restaurantId,
            category: category,
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