import express from 'express';
import userRouter from './models/user/router/userRouter';
//import itemRouter from './routes/postRouter'
const app = express();

const port: string | number = process.env.PORT || 5555;

app.use(express.json());
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
