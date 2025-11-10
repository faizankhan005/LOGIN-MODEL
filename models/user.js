const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/miniproject');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    age: Number,
     email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilepic: {   
        type: String,
        default: 'default.png'
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }]
   
});

module.exports = mongoose.model('user', userSchema);