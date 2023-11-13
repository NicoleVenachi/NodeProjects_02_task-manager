
const asyncWrapper = (fn) => {
  return async(req, res, next)  => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error) //next middleware to deal with error
    }
  }
}

module.exports = asyncWrapper

