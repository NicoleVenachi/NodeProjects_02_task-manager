
class CustomAPIError extends Error { 

  constructor(message, statusCode) {
    super(message); // el Error class de JS necesita message
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError (msg, statusCode)
} //funcion para crear objetos ee la clase error

module.exports = {
  CustomAPIError,
  createCustomError
}

