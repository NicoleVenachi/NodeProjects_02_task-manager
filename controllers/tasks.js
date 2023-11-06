
const getAllTasks = (req, res) => {
  res.send('all items')
}

const createTask = (req, res) => {
  res.json(req.body) //test to send what i've received
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