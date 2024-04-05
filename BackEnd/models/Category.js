const { Schema, model } = require("mongoose");


const TAG = 'Category';

const categorySchema = new Schema(
    {
    name: { 
        type: String, 
        default: 'hahaha' 
    },
    bio: { 
        type: String, 
        match: /[a-z]/ 
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    buff: Buffer
}, {
    timestamps: true,
    collection: TAG
});


const Category = model(TAG, categorySchema);
module.exports = Category