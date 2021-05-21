import express from 'express';
import userRouter from './models/user/router/userRouter';
import postRouter from './models/post/router/postRouter';
import sequelize from './database/sequelize';
import config from 'config';

const app = express();
const port = config.get('api.port');

app.use(express.json());
app.use('/user', userRouter);
app.use('/post', postRouter);

// const main = async function () {
//     await sequelize.sync({ force: true });
//     console.log('The table for the User and Item models was just (re)created!');
// };
// main();

app.listen(port, () => {
    sequelize.authenticate();
    console.log(`Server is up on port ${port}`);
});
