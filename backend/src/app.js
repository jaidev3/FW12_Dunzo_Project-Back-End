
//////////////imports//////////////////
const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors');
const dotenv = require('dotenv');
const storeController = require("./controllers/store.controller");
const itemController = require("./controllers/item.controller");
const cartController = require("./controllers/cart.controller");
const app = express();

////////configs/////////////////
dotenv.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(express.static("public"));


// app.get('/', (req,res) => {
//     res.send("This is backend")
// })


app.set('view engine', 'ejs');

app.use("/store", storeController)
app.use("/item", itemController)
app.use("/cart", cartController)

module.exports = app;