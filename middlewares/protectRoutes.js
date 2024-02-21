// function isAdmin(req,res,next){
// // checks the json web token  and if it has the role has admin then isAdmin is assigned to true
// // 
// }
// function isDoctor(req,res,next){
//     // checks the json web token and if it has the role as doctor then isDoctor is true
//     // allowed access to next route if the user is not doctor then returns an error


// }
// function isLabWorker(req,res,next){
//   // checks the json web token and if it has the role as labWorker then isLabWorker is true
//     // allowed access to next route if the user is not labWorker then returns an error
// }
// function isSuperAdmin(req,res,next){
//     // superAdmin will be us the devs creating new hospital admins to protect against fraud pretenders 
//     // trying to pretend as doctor. Instead of working on cmd this will present a graphical ui
//      // to add new user who are admins and allows approve any admin request and other authorization request.
//   // checks the json web token and if it has the role as SuperAdmin then isSuperAdmin to is true
//     // allowed access to next route if the user is not superAdmin then returns an error
// }
function protectRoutes(req,res,next){
if(req.path.startWith('/api/superAdmin') && !req.userRole!=='superAdmin'){
    error.statusCode = 403;
    throw error;
}
if(req.path.startsWith('/api/admin') && !req.userRole!== 'admin'){
    error.statusCode = 403;
    throw error;
 }
 if(req.path.startsWith('/api/doctor') && !req.userRole !=='doctor'){
    error.statusCode = 403;
    throw error;
 }
 if(req.path.startsWith('/api/lab') && !req.userRole !=='labWorker'){
    error.statusCode = 403;
    throw error;
 }

}

module.exports=protectRoutes;


