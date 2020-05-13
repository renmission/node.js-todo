const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router
    .route('/')
    .get(todoController.getAllTodos)
    .post(todoController.create);

router.delete('/:id', todoController.delete);

module.exports = router;