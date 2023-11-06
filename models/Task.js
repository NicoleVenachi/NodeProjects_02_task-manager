
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
})

const model = mongoose.model('Task', TaskSchema) //coleccionAEscirbirEnLaDB, SwSchema
module.exports = model 