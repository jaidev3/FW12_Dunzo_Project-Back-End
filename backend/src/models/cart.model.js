const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
    {
        item_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'item',
            required: true
        },
        qty: {type: Number, required: true}
    },
    {
        versionKey: false,
        timeStamps: true
    }
);

module.exports = mongoose.model("cart", cartSchema )
