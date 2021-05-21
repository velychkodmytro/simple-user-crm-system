import express from 'express';
import userRouter from './models/user/userRouter';
import postRouter from './models/post/postRouter';
import sequelize from './database/config/sequelize';
import config from 'config';

const app = express();

const port = config.get('api.port');

app.use(express.json());
app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(port, () => {
    sequelize.authenticate();
    console.log(`Server is up on port ${port}`);
});
