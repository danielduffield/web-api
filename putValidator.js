module.exports = (req, res, next) => {
  let validatedObject = {}
  const validFields = ['title', 'content']
  validFields.forEach(field => {
    if (req.body[field]) {
      validatedObject[field] = req.body[field]
    }
  })
  if (!Object.keys(validatedObject).length) {
    validatedObject = null
  }
  req.body = validatedObject
  next()
}
