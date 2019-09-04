const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required : true,
        minLength: 1,
        trim: true // cuts the leading and trailing spaces.
    }
    ,
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
    Todo
};