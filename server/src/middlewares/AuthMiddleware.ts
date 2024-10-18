import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";



const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader === null || authHeader === undefined) {
        res.status(401).json({
            status: 401,
            message: "Unauthorized"
        });
        return;
    }

    const token = authHeader.split(" ")[1];
    // Verifying the JWT
    jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
        if (err) {
            res.status(401).json({
                status: 401,
                message: "Unauthorized, Unable to verify JWT Token."
            })
            return;
        }
        req.user = user as AuthUser;
        next();
    });

}


export default AuthMiddleware;