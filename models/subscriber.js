const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: {
            type:String,
            unique: true,
        },
        email: {
            type:String,
            unique: true,
        },
        zipCode: {
            type:Number,
            unique: true,
        },
        link: {
            type:String,
            unique: true,
        },
    });
module.exports = mongoose.model("Subscriber", subscriberSchema);
