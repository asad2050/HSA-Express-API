const {body} = require('express-validator');

 const loginValidator = [
  body('email', 'Invalid does not Empty').not().isEmpty(),
  body('email', 'Invalid email').isEmail(),
  body('password', 'The minimum password length is 6 characters').isLength({min: 6}),
]

const createValidator = [
  body('user.username', 'username does not Empty').not().isEmpty(),
  body('user.email', 'Invalid email').isEmail(),
  body('user.age', 'username must be Alphanumeric').isAlphanumeric(),
  body('user.birthday', 'Invalid birthday').isISO8601(), // check date is ISOString
  body('user.password', 'password does not Empty').not().isEmpty(),
  body('user.password', 'The minimum password length is 6 characters').isLength({min: 6}),
]
 const signupValidator=[
    body('email', 'Invalid should not be Empty').not().isEmpty(),
  body('email', 'Invalid email').isEmail(),
  body('password', 'password should not be Empty').not().isEmpty(),
  body('password', 'The minimum password length is 6 characters').isLength({min: 6}),
  body('firstName','The first name should not be empty').not().isEmpty(),
  body("lastName","The last name should not by empty").not().isEmpty(),
  body('phoneNumber','Mobile number must be 10 digit long').isLength({min:10}),
  body('phoneNumber','Mobile number must not be empty').not().isEmpty()
]
module.exports={
    loginValidator:loginValidator,
    createValidator:createValidator,
    signupValidator:signupValidator
}