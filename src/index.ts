import express from 'express';
import userRouter from './models/user/router/userRouter';
//import itemRouter from './routes/postRouter'
import sequilize from './database/sequelize';
import config from 'config';

const app = express();
const port = config.get('database.PORT');

app.use(express.json());
app.use('/user', userRouter);

const main = async function () {
    await sequilize.sync({ force: true });
    console.log('The table for the User and Item models was just (re)created!');
};
main();

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
