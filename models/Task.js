
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String, //value

    //--- validators
    required: [true, 'must provide a name'], //value, con erro/custom message
    trim: true, //trim de spaces al inico y final
    maxlength: [20, 'name can not be more than 20 characters'] //value y error message
  },
  completed: {
    type: Boolean,

    default: false, // por defecto false/incompleta

  }
})

const model = mongoose.model('Task', TaskSchema) //coleccionAEscirbirEnLaDB, SwSchema
module.exports = model 