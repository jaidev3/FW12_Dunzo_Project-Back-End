
const mongoose = require('mongoose');

const locationSchema = mongoose.Schema(
    {
        Street_Address:{type: String, required: true},
        Country:{type: String, required: true},
        State:{type: String, required: true},
        City:{type: String, required: true}, 
        Zip_code:{type: String, required: true},
          
    },
    {
        versionKey: false,
        timeStamps: true
    }
);

module.exports = mongoose.model("location", locationSchema )
