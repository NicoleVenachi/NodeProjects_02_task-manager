

// import models
const Model = require('../models/Task'); //Task model

//import middlewares
const asyncWrapper = require('../middleware/async');


const getAllTasks = asyncWrapper( async (req, res) => {


    // -R-ead method
    const tasks = await Model.find({}); // {}, all documents/instances

    // ******Formatos posibles de respuests****
    res.status(200).json({tasks}) //solo data

    //   res.status(200).json({tasks, amount: tasks.length}) // amount of instances sended

    //   res.status(200).json({
    //       success: true, 
    //       data: {tasks, nbHits:tasks.length} 
    //   }) //flag indicando el resultado de la peticion, y la data (data y amount/number of hits)

    //   res.status(200).json({
    //     status: "success", 
    //     data: {tasks, nbHits:tasks.length} 
    // }) //flag y data

    // res.status(500).json({msg: error})

} )

const createTask = asyncWrapper( async (req, res) => {

  //req.body = {
  // 	"name": "testing",
  // 	"completed": false
  // }

  // -C-reate method
  const task = await Model.create(req.body)
  res.status(201).json({task}) //test to send what i've received
  
})

const getTask = asyncWrapper( async (req, res) => {

  const {id: taskId} = req.params //saco el Id de la URL params
    // -R-ead method (con querying condition), para 1 único registro

  const task = await Model.findOne({_id: taskId});
  // {configuro la condición, equality}

  if (!task) return res.status(404).json({msg: `No task with id: ${taskId}`});
  // sino encuentra nada/Null, ese id no existe, me lo mandaron mal

  res.status(200).json({task})

})

const updateTask = asyncWrapper( async (req, res) => {

  const {id: taskId} = req.params;

  // -U-pdate  method (espefico qué valor debe tomar ahora -SET-, y dónde haré los cambios -WHERE- )

  const task = await Model.findOneAndUpdate({_id: taskId}, req.body, {new:true, runValidators: true}) //({instanceToMatch}, newData, options)
  // con esas options me devuelvo el nuevo valor y aplica los validators

  if (!task) return res.status(404).json({msg: `No task with id: ${taskId}`});

  res.status(200).json({task})

} )

const deleteTask = asyncWrapper( async (req, res) => {

    const {id: taskId} = req.params //saco el Id a eliminar

    // -D-elete method (especificando el elemtno a eliminar, WHERE)
    const task = await Model.findOneAndDelete({_id:taskId}) //{} instance to delete

    if (!task) return res.status(404).json({msg: `No task with id: ${taskId}`});

    res.status(200).json({task:task})

    //otros formatos de respuesta para delete
    // res.status(200).send() 
    // res.status(200).json({task:null, status:'succesfull'})
  
} )

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}