import express from 'express'
import userRouter from './routes/userRouter'
import itemRouter from './routes/postRouter'
const app = express()

const port: string | number = process.env.PORT || 5555

app.use(express.json())
app.use('/user', userRouter)
app.use(userRouter)
app.use(itemRouter)
app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
