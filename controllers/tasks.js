

// import models
const Model = require('../models/Task'); //Task model

const getAllTasks = (req, res) => {
  res.send('all items')
}

const createTask = async (req, res) => {

  // -C-reate method
  const task = await Model.create(req.body)
  //req.body = {
  // 	"name": "testing",
  // 	"completed": false
  // }


  res.status(201).json({task}) //test to send what i've received
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