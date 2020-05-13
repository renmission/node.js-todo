const Todo = require('../models/todoModel');

exports.getAllTodos = async (req, res, next) => {
    const todos = await Todo.find();
    res.status(200).render('index', { todos });
}


exports.create = async (req, res, next) => {
   const { name } = req.body; 
   let todo = new Todo({ name });

   await todo.save();
   res.redirect('/');
}

exports.delete = async (req, res, next) => {
    const removeTodo = await Todo.findById(req.params.id);
    await removeTodo.remove();
    res.redirect('/');
}