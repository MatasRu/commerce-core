const express = require("express");
const app = express();
const mainRouter = require("./router/MainRouter");

const cors = require("cors");

app.listen(3001);
app.use(express.json());
app.use(cors());

app.use(["/"], mainRouter);
