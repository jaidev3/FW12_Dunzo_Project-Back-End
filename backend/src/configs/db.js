const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://jaidev:dunzo@cluster0.e7bgv.mongodb.net/dunzo?retryWrites=true&w=majority");
}