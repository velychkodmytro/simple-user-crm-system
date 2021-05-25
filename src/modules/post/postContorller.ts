import { Request, Response, NextFunction } from 'express';
import PostModel from './postModel';
import PostService from './postService';

type EmptyObjectType = Record<string, never>;

export const postCreate = async (
    req: Request<EmptyObjectType, EmptyObjectType, PostModel, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const result = await PostService.сreate(req.body);
        res.status(201);
        res.send(result);
    } catch (error) {
        res.status(422).send({ error });
    }
};

export const postGetAll = async (
    req: Request<EmptyObjectType, EmptyObjectType, PostModel, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const result = await PostService.findAllPosts();
        res.status(200).send(result);
    } catch (error) {
        res.status(402).send({ error });
    }
};

export const postGetOne = async (
    req: Request<EmptyObjectType, EmptyObjectType, PostModel, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        res.status(200).send(await PostService.findOne(id));
    } catch (error) {
        res.status(402).send({ error });
    }
};

export const postDeleteById = async (
    req: Request<EmptyObjectType, EmptyObjectType, PostModel, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const result = await PostService.deletePostById(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(402).send({ error });
    }
};

export const postUpdate = async (
    req: Request<EmptyObjectType, EmptyObjectType, PostModel, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const postBody = req.body;
        const { id } = req.params;
        const updatedPost = await PostService.updatePostById(postBody, id);
        res.status(200).send(updatedPost);
    } catch (error) {
        res.status(402).send({ error });
    }
};
