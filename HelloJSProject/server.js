const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hi, Vi är Kuuuul!!!");
})


app.listen(8080, () => console.log("Cool!"));