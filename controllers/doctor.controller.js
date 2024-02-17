function getDoctorDashboardById(req,res,next){
//gets the home data such as current appointments and and today's scheduled appointments.
//this will use the id suuplied by req.params.id
}
function getAllPatientsByDoctorId(req,res,next){
    //gets all the patients details for doctor of this id. from the doctor model using the req.params.id
    // this will send the array of objects, the array PatientsDataList will be sorted in most recent manner using the
    // date attribute.
    //res.send({PatintsDataList:[{},{}]})
}
function getPatientDetailByIdForDoctor(req,res,next){
    //this controller function will get the individual patient detail using the id from req.params.patientId and req.params.

}
function getScheduleByDate(req,res,next){
//this controller will get the schedule of the doctor for the given date.
// the calendar picker will send ajax request from vue to this route and this route will 
// send the given date data.
}

function reshedulePatientById(req,res,next){
// if doctor has to reschedule a single patient.
}
function getProfile(req,res,next){
// gets the personal detail of doctor
}
function updateProfile(req,res,next){
    // uploads the changes in profile using req.body and doctor model.

}
function markAsOffDay(req,res,next){
    // this will mark the entire day as a non fillable by patients
}
function updateSchedule(req,res,next){
    // any  change in schedule such as taking holidays, this must be done prior to the day which is holiday.
    // or a gap of 7 days need to be given to patient to bookAppointments
}
module.exports={
    getDoctorDashboardById:getDoctorDashboardById,
    getAllPatientsByDoctorId:getAllPatientsByDoctorId,
    getPatientDetailByIdForDoctor:getPatientDetailByIdForDoctor,
    getScheduleByDate:getScheduleByDate,
    reshedulePatientById:reshedulePatientById,
    getProfile:getProfile,
    updateProfile:updateProfile,
    markAsOffDay:markAsOffDay,
    updateSchedule:updateSchedule,
}