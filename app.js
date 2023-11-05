console.log('Task Manager App')

// imports
const express = require('express');

// inicializo express app
const app = express(); 

// routing
app.get('/hello', (req,res) => {

  res.send('Task Manager App')

})
// defino el prueto a escuchar
const PORT = 3000; // || process.env;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})