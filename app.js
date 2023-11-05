console.log('Task Manager App')

// imports
const express = require('express');
const tasks = require('./routes/tasks')


// inicializo express app
const app = express(); 

// routing
app.get('/hello', (req,res) => {
  res.send('Task Manager App')
})

// middlewares
app.use(express.json()) //usar body en json type

// routers
app.use('/api/v1/tasks', tasks)

// ******* summary de routes
// app.get('/api/v1/tasks)  -get all the tasks
// app.post('/api/v1/tasks) -create a new task
// app.get('/api/v1/tasks/:id)  -get a single task
// app.patch('/api/v1/tasks/:id)  -update tasks
// app.delete('/api/v1/tasks/:id)  -delete task
// *********

// defino el prueto a escuchar
const PORT = 3000; // || process.env;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})