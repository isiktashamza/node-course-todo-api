const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const id = '6d6f964df961ec2134e70c87';

Todo.find({
    _id: id
}).then((todos) => {
    console.log(todos);
});

Todo.findOne({
    _id : id
}).then((todo) => {
    console.log(todo);
});

Todo.findById(id).then((todo) => {
    console.log(todo);
});