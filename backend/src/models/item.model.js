const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
    {
        item: {type: String, required: true},
        image: {type: String, required: true},
        price1: {type: Number, required: true},
        price: {type: String, required: true},
        store_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref:"movie",
            required: true
        }],
    },
    {
        versionKey: false,
        timeStamps: true
    }
);

module.exports = mongoose.model("item", itemSchema )
