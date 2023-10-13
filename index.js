require('dotenv').config();
const express = require("express")
const cors = require("cors")
const router = require("./routes/router");
const bodyParser = require('body-parser');

const server = express();
const port = process.env.APPPORT || 4300;

server.use(express.json());
server.use(bodyParser.json());
server.use(cors());
server.use(router);

server.listen(port, () => {
    console.log("Server is running!");
});