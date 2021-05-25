import UserModel from '../modules/user/userModel';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authentication = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'thisismynewtoken');
        const user = await UserModel.findOne({
            where: { id: (decoded as any).id },
        });

        if (!user) {
            throw new Error('Dont find user');
        }

        (req as any).user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = authentication;
