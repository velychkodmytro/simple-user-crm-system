import FollowerService from './followerService';
import FollowerModel from './followerModel';
import { Request, Response, NextFunction } from 'express';

type EmptyObjectType = Record<string, never>;

export const FollowerGetAll = async (
    req: Request<
        EmptyObjectType,
        EmptyObjectType,
        FollowerModel,
        EmptyObjectType
    >,
    res: Response
): Promise<void> => {
    try {
        const result = await FollowerService.findAllFollowers();
        res.status(200).send(result);
    } catch (error) {
        res.status(402).send({ error });
    }
};
