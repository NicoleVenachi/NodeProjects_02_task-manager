//import calse error
const { CustomAPIError } = require("../errors/custom-error");



const errorHandlerMiddleware = (err, req, res, next) => {
  
  if (err instanceof CustomAPIError) { // veo si el error es del tipo que estoy creando, para darle formato
    return res.status(err.statusCode).json({msg: err.message});
  }

  //sino, un error ya más generalzdo 
  return res.status(500).json('Something went wrong, please try again later');
}

module.exports = errorHandlerMiddleware

