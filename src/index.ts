import express from 'express';
import userRouter from './routes/userRouter';
// import itemRouter from './routes/postRouter';
const app = express();
import config from 'config/default';

const port: number = config.serverPort || 5555;

app.use(express.json());

app.use('/user', userRouter);
// app.use(userRouter);
// app.use(itemRouter);
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
