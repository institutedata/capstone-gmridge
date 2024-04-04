const { Schema, model } = require("mongoose");


const TAG = 'Comment';

const commentSchema = new Schema(
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


const Comment = model(TAG, commentSchema);
module.exports = Comment