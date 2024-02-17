const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const path = require('path');
const fs= require('fs');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(bodyParser.json())
const baseRoutes = require('./routes/base.routes');
const authRoutes= require('./routes/auth.routes');
const patientRoutes= require('./routes/patients.routes');
// const doctorRoutes= require('./routes/doctors.routes');
// const adminRoutes= require('./routes/admin.routes');
// const labRoutes= require('./routes/lab.routes');
app.use('/api',baseRoutes);
app.use('/api/auth',authRoutes);
// the protectRoutesMiddleware will check
//authentication and authorization of the user and if its authenticated then the he will receive appropriate data
// app.use('/api/doctor',protecRouteMiddleware,doctorRoutes); we will save the user info in jwt or session
// so we would have already known the id of the user no need to include in routes.
// app.use('/api/doctor',doctorRoutes); 
// // app.use('/api/patients',protecRouteMiddleware,patientRoutes);
// app.use('api/patients',patientRoutes);
// // app.use('/api/admin',protecRouteMiddleware,adminRoutes); 
// app.use('api/admin',adminRoutes);
// // app.use('/api/lab-worker',protecRouteMiddleware,labRoutes);
// app.use('api/lab-worker',labRoutes);
app.use(function(error,req,res,next){
res.status(500).render('500');
});
mongoose.connect('mongodb://127.0.0.1:27017/hsa-api').then(function(){
    app.listen(3000);
}).catch(err => {
    console.log(err);
  });
