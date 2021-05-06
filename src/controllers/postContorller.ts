// import { Request, Response, NextFunction } from 'express';
// import PostService from '../models/post';

// interface RequestBody {
//     name: string;
//     age: number;
//     id: string;
//     path: string;
//     nameOfFile: string;
// }

// let post: PostService = new PostService();

// export const initializePost = async (
//     req: Request<{}, {}, RequestBody, {}>,
//     res: Response
// ) => {
//     try {
//         await post.init();
//         const { nameOfFile } = req.body;
//         if (nameOfFile) {
//             res.status(200).send({ message: 'Dir/file is already exists' });
//         }
//         res.status(200).send({
//             message: 'Dir/file has been successfuly created',
//         });
//     } catch (error) {
//         res.status(422).send({ error });
//     }
// };
// export const createUser = async (
//     req: Request<{}, {}, RequestBody, {}>,
//     res: Response
// ) => {
//     try {
//         const { name, age } = req.body;
//         // const id = uuid()
//         //await post.create({ name, age, id })
//         res.status(200).send({ message: `User was successfuly created ` });
//     } catch (error) {
//         res.status(422).send({ error });
//     }
// };

// export const getAllUsers = async (
//     req: Request<{}, {}, RequestBody, {}>,
//     res: Response
// ) => {
//     try {
//         const users = await post.findAll();
//         res.status(200).send(users);
//     } catch (error) {
//         res.status(402).send({ error });
//     }
// };

// export const deleteUserFile = async (
//     req: Request<{}, {}, RequestBody, {}>,
//     res: Response
// ) => {
//     try {
//         await post.deleteUserFile();
//         res.status(200).send({ message: `File  was successfuly deleted` });
//     } catch (error) {
//         res.status(402).send({ error });
//     }
// };
// export const deleteUserById = async (
//     req: Request<{}, {}, RequestBody, {}>,
//     res: Response
// ) => {
//     try {
//         const { id } = req.body;
//         await post.deleteUserById(id);
//         res.status(200).send({ message: `User  was successfuly deleted` });
//     } catch (error) {
//         res.status(402).send({ error });
//     }
// };

// export const updateUser = async (
//     req: Request<{}, {}, RequestBody, {}>,
//     res: Response
// ) => {
//     try {
//         const { name, age, id } = req.body;
//         await post.updateUserById({ name, age }, id);

//         res.status(200).send({ message: `User  was successfuly deleted` });
//     } catch (error) {
//         res.status(402).send({ error });
//     }
// };
