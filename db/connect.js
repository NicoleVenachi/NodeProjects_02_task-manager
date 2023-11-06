//imports
const mongoose = require('mongoose')

// connectionString hardcodeada
// const connectionString =  ''


// lets fix issus on asynchronous direct call
const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }) //(connections, options)
  //estor retornando una PROMESA
};

module.exports = connectDB;

// asynchronous call using promises
// mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }) //(connections, options)
//   .then(() => console.log('CONNECTED TO THE DB ...'))
//   .catch((err) => console.log(err))

