import { userService } from '../user';
import { Request, Response } from 'express';
import {
    FileInitialize,
    UserCreate,
    UserDelete,
    UserUpdate,
} from '../interfaces';

type EmptyObjectType = Record<string, never>;

export const initializeUser = async (
    req: Request<
        EmptyObjectType,
        EmptyObjectType,
        FileInitialize,
        EmptyObjectType
    >,
    res: Response
): Promise<void> => {
    try {
        await userService.init();
        const { path, nameOfFile } = req.body;
        if (path || nameOfFile) {
            res.status(200).send({ message: 'Dir/file is already exists' });
        }
        res.status(200).send({
            message: 'Dir/file has been successfuly created',
        });
    } catch (error) {
        res.status(422).send({ error });
    }
};

export const createUser = async (
    req: Request<EmptyObjectType, EmptyObjectType, UserCreate, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const { name, age } = req.body;
        await userService.create({ name, age });
        res.status(200).send({ message: `User was successfuly created ` });
    } catch (error) {
        res.status(422).send({ error });
    }
};

export const getAllUsers = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const users = await userService.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(402).send({ error });
    }
};
export const deleteUserById = async (
    req: Request<EmptyObjectType, EmptyObjectType, UserDelete, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.body;
        await userService.deleteUserById(id);
        res.status(200).send({
            message: `User with id: ${id} was successfuly deleted`,
        });
    } catch (error) {
        res.status(402).send({ error });
    }
};

export const updateUser = async (
    req: Request<EmptyObjectType, EmptyObjectType, UserUpdate, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.body;
        await userService.updateUserById(req.body);
        res.status(200).send({
            message: `User with id: ${id} was successfuly updated`,
        });
    } catch (error) {
        res.status(402).send({ error });
    }
};
