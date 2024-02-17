function getSingup(req,res,next){
 // logic for showing signup page
    
}
function signup(req,res,next){
     // logic for  creating new user and then redirecting to login page.

}
function getLogin(req,res,next){
      // logic for passing the login data or page.
}
function login(req,res,next){
       // logic for authenticating user and then loading user's appropriate dashboard

}
module.exports={
    getSingup:getSingup,
    getLogin:getLogin,
    signup:signup,
    login:login
}