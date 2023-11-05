

//imports
const express = require('express');
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks')

// inicializo router
const router = express.Router()

router.get('/', getAllTasks) //logica la separo en controllers
router.post('/', createTask)
router.get('/:id', getTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)


module.exports = router



