const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    message : {
        type : String,
        required : true
    },
    timestamp : {
        type : Date,
        default : Date.now
    }
});

const chatSchema = new mongoose.Schema({
    userIds : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    }],
    messages : [messageSchema]
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;