

// import models
const Model = require('../models/Task'); //Task model

const getAllTasks = async (req, res) => {

  try {
    // -R-ead method
    const allTasks = await Model.find({}); // {}, all documents/instances
    res.status(200).json({allTasks})
  } catch (error) {
    res.status(500).json({msg: error})
  }

}

const createTask = async (req, res) => {

  //req.body = {
  // 	"name": "testing",
  // 	"completed": false
  // }

  try {
    // -C-reate method
    const task = await Model.create(req.body)
    res.status(201).json({task}) //test to send what i've received

  } catch (error) {
    res.status(500).json({msg: error})
  }
  

}

const getTask = (req, res) => {
  res.json({id: req.params.id}) // test to response using the id on the url params
}

const updateTask = (req, res) => {
  res.send('update task')
}

const deleteTask = (req, res) => {
  res.send('delete task')
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}