
// imports
const connectDB = require('./db/connect'); //connection to DB
require('dotenv').config()

const express = require('express');

const tasks = require('./routes/tasks')

const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// inicializo express app
const app = express(); 

// routing
app.get('/hello', (req,res) => {
  res.send('Task Manager App')
})

// middlewares
app.use(express.json()) //usar body en json type

// middlewares - routers
app.use(express.static('./public')) // path
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

// ******* summary de routes
// app.get('/api/v1/tasks)  -get all the tasks
// app.post('/api/v1/tasks) -create a new task
// app.get('/api/v1/tasks/:id)  -get a single task
// app.patch('/api/v1/tasks/:id)  -update tasks
// app.delete('/api/v1/tasks/:id)  -delete task
// *********

// defino el prueto a escuchar
const PORT = process.env.PORT || 3000;

//llamo la conexión a la DB, sino se conecta, no pongo a correr el server

const start = async () => {
  try {
  
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}

start() //llamo ala funion

