const mongoose = require('mongoose');

const storeSchema = mongoose.Schema(
    {
        image: {type: String, required: true},
        title: {type: String, required: true},
        location: {type: String, required: true},
        distance: {type: Number, required: true},
    },
    {
        versionKey: false,
        timeStamps: true
    }
);

module.exports = mongoose.model("store", storeSchema )

