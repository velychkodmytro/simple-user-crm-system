import { Request, Response, NextFunction } from 'express';
import PostModel from '../postModel';
import PostService from '../postService';
interface RequestBody {
    id: string;
    title: string;
    text: string;
    ownerId: string;
}
type EmptyObjectType = Record<string, never>;

export const postCreate = async (
    req: Request<EmptyObjectType, EmptyObjectType, PostModel, EmptyObjectType>,
    res: Response
): Promise<void> => {
    try {
        const { ownerId } = req.params;
        const result = await PostService.сreate(req.body, ownerId);
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
        const { ownerId } = req.params;
        res.status(200).send(await PostService.findAllPosts(ownerId));
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

        res.status(200).send(await PostService.deletePostById(id));
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
