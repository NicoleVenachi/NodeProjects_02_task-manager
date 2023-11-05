

//imports
const express = require('express');
const {getAllTasks} = require('../controllers/tasks')

// inicializo router
const router = express.Router()

router.get('/', getAllTasks) //logica la separo en controllers
router.post('/', createTask)


module.exports = router



