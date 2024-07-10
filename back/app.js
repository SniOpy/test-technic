
const express = require('express')
const app = express()
const router = require("./app/routers");
const cors = require('cors');
const port = 5000 || process.env.PORT;

//* Utilisation de cors pour autoriser le transfert de donnée 
app.use(cors("*"));

//* Setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* Router
app.use(router);

app.listen(port, () => {
  console.log(`Listening on port : http://localhost:${port}`)
})
