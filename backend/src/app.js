const express = require("express");

const storeController = require("./controllers/store.controller");
const itemController = require("./controllers/item.controller");

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');

app.use("/store", storeController)
app.use("/item", itemController)


module.exports = app;