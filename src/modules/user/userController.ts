import UserService from './userService';
import { Request, Response } from 'express';
import UserModel from './userModel';

type EmptyObjectType = Record<string, never>;

export const createUser = async (
    req: Request<EmptyObjectType, EmptyObjectType, UserModel, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const result = await UserService.userCreate(req.body);
        res.status(201).send(result);
    } catch (error) {
        res.status(422).send({ error });
    }
};

export const userGetAll = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        res.status(200).send(await UserService.userFindAll());
    } catch (error) {
        res.status(402).send({ error });
    }
};
export const userGetOne = async (
    req: Request<EmptyObjectType, EmptyObjectType, UserModel, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const id = req.params.id;
        res.status(200).send(await UserService.userFindOne(id));
    } catch (error) {
        res.status(402).send({ error });
    }
};
export const userDeleteById = async (
    req: Request<EmptyObjectType, EmptyObjectType, UserModel, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const result = await UserService.userDelete(id);

        res.status(201).send({ result, msg: 'User was deleted' });
    } catch (error) {
        res.status(402).send({ error });
    }
};

export const userUpdateById = async (
    req: Request<EmptyObjectType, EmptyObjectType, UserModel, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const userBody = req.body;
        const updatedUser = await UserService.userUpdate(id, userBody);
        res.json(updatedUser);
    } catch (error) {
        res.status(402).send({ error });
    }
};
