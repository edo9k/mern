const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateRegisterInput(data) {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ''
  data.email = !isEmpty(data.email) ? data.name : ''
  data.password = !isEmpty(data.password) ? data.name : ''
  data.password2 = !isEmpty(data.password2) ? data.name : ''

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters'
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is require'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Name field is required'
  }

  if (Validator.isEmail(data.email)) {
    erros.email = 'Email is invalid'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
