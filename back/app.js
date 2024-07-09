
const express = require('express')
const app = express()
const port = 5000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

app.listen(port, () => {
  console.log(`Listening on port : https://localhost:${port}`)
})
