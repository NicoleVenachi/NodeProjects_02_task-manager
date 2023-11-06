//imports
const mongoose = require('mongoose')




// asynchronous call
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }) //(connections, options)
  .then(() => console.log('CONNECTED TO THE DB ...'))
  .catch((err) => console.log(err))

