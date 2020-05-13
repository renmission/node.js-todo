const mongooose = require('mongoose');

const todoSchema = new mongooose.Schema({
    name: {
        type: String
    }
});

const Todo = mongooose.model('Todo', todoSchema);
module.exports = Todo;