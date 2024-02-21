const bcrypt = require('bcrypt');
const User = require('../models/user');
const Patient = require("../models/patient");
const {validationResult} = require('express-validator');
function  signupPatient(req,res,next){
     // logic for  creating new patient.
     // this route should only be acessible via the mobile app. 
     // and on the website this will not be visible.
     const email = req.body.email;
     const firstName = req.body.firstName;
     const middleName= req.body.middleName;
     const lastName = req.body.lastName;
     const password = req.body.password;
     const phoneNumber = req.body.phoneNumber;
     const errors = validationResult(req);
    if(!errors.isEmpty()){
      const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
    }
    // input validation needs to be studied and handled.
  
     
 bcrypt.hash(password,12).then(hashedPw=>{
        const newUser = new User({
            name: {
                firstName: firstName,
                middleName: middleName,
                lastName: lastName
            },
            email: email,
            password: hashedPw,
            role: 'patient'
        });
       return newUser.save();
     } ).then(result => {
        const newPatient = new Patient({owner:result._id});
        return newPatient.save();
        
      }).then(result=>{
        res.status(201).json({ message: 'User created!', patientId: result._id ,userId: result.owner });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
    
}
function login(req,res,next){
       // logic for authenticating user and then loading user's appropriate dashboard
}
function signupHospital(req,res,next){

}
module.exports={
    signupPatient:signupPatient,
    login:login,
    signupHospital:signupHospital
}