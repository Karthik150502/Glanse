import { Request, Response } from "express";
import prisma from "../config/db.config";




export default class FoodCategory {
    static async create(req: Request, res: Response) {

        let { name, description, created_by, served_by } = req.body;


        let category = await prisma.category.create({
            data: {
                name,
                description,
                created_by,
                served_by
            }
        })


        res.status(200).json({
            status: 200,
            message: "The Food Category has been added.",
            category: category
        });
        return;
    }

    static async getCategory_Restaurant(req: Request, res: Response) {
        let { id } = req.params;


        let categories = await prisma.category.findMany({
            where: {
                served_by: Number(id)
            }
        })


        res.status(200).json({
            status: 200,
            message: "Foor categories fetched.",
            categories: categories,
            served_by: id
        })
    }
}