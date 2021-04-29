import http from 'http'
import express from 'express'
import userRouter from './userRouter'
const app = express()

const port: number = 5555

app.use(express.json())
app.use(userRouter)
app.listen(port, () => {
  console.log('Server is up on port' + port)
})
