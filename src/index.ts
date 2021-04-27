import http from 'http'
const express = require('express')
const app = express()

const hostname: string = '127.0.0.1'
const port: string | 5555 = process.env.PORT || 5555

app.use(express.json())

// const server = http.createServer((req, res) => {
//     // Отсылаем тело ответа "Hello World"
//     res.end('Hello World\n');
//  });
// app.listen(port, hostname () => {
//   console.log('Server is up on port' + port)
// })
