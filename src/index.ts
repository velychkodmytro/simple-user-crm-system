import express from 'express';
import userRouter from './modules/user/userRouter';
import postRouter from './modules/post/postRouter';
import sequelize from './database/config/sequelize';
import config from 'config';

const app = express();

const port = config.get('api.port');

app.use(express.json());
app.use('/users', userRouter);
app.use('/posts', postRouter);

app.listen(port, () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log(`Server is on port ${port}`);
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err);
        });
});
