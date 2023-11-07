

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

const getTask = async (req, res) => {

  const {id: taskId} = req.params //saco el Id de la URL params

  try {
    // -R-ead method (con querying condition), para 1 único registro

    console.log(taskId);
    const task = await Model.findOne({_id: taskId});
    // {configuro la condición, equality}

    console.log(task);

    if (!task) return res.status(404).json({msg: `No task with id: ${taskId}`});
    // sino encuentra nada/Null, ese id no existe, me lo mandaron mal

    res.status(200).json({task})

  } catch (error) {
    res.status(500).json({msg: error})
  }
  
}

const updateTask = async (req, res) => {
  try {

    const {id: taskId} = req.params;

    // -U-pdate  method (espefico qué valor debe tomar ahora -SET-, y dónde haré los cambios -WHERE- )

    const task = await Model.findOneAndUpdate({_id: taskId}, req.body, {new:true, runValidators: true}) //({instanceToMatch}, newData, options)
    // con esas options me devuelvo el nuevo valor y aplica los validators

    if (!task) return res.status(404).json({msg: `No task with id: ${taskId}`});

    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

const deleteTask = async (req, res) => {
  try {
    const {id: taskId} = req.params //saco el Id a eliminar

    // -D-elete method (especificando el elemtno a eliminar, WHERE)
    const task = await Model.findOneAndDelete({_id:taskId}) //{} instance to delete

    if (!task) return res.status(404).json({msg: `No task with id: ${taskId}`});

    res.status(200).json({task:task})

    //otros formatos de respuesta
    // res.status(200).send() 
    // res.status(200).json({task:null, status:'succesfull'})
  } catch (error) {
    res.status(500).json({msg: error})
  }
  
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}