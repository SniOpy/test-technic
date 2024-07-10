
const express = require('express')
const app = express()
const router = require("./app/routers");
const port = 5000 || process.env.PORT;

//* Router
app.use(router);

app.listen(port, () => {
  console.log(`Listening on port : http://localhost:${port}`)
})
