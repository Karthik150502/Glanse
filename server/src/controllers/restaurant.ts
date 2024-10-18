import { Request, Response } from "express";
import prisma from "../config/db.config";




export default class RestaurantHandler {
    static async create(req: Request, res: Response) {

        let { name, description, owned_by, location } = req.body;


        let restaurant = await prisma.restaurant.create({
            data: {
                name,
                description,
                owned_by,
                location
            }
        })


        res.status(200).json({
            status: 200,
            message: "The Restaurant has been added.",
            restaurant: restaurant
        });
        return;
    }


    static async getAll(req: Request, res: Response) {
        let { id } = req.params;

        let restaurants = await prisma.restaurant.findMany({
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
    }
}