function getPatientDetails(req,res,next){
// will fetch the patient detail from patient model and send in json form for frontend
// the patient details will be the two lists 
// {pastAppointments:[{}],pastTest:[{}],}
// we will send in most recent order by using the date attribute of the appointments and lab
// this way the frontend can extract the first 2-3 objects from pastAppoinments array and
// first 2-3 objects from the pastTest array.

}

function getProfile(req,res,next){
    // gets the personal detail of doctor
    }
    function updateProfile(req,res,next){
        // uploads the changes in profile using req.body and doctor model.
    
    }
function createAppointment(req,res,next){
// will show the appoitnment fields
}
function getCreateAppointment(req,res,next){
    // will createAppointmetns
    // payment api can be used to receive payments
}  
function cancelAppointment(req,res,next){
    // will delete the appointment allow other user to fill during this time
    // payment has to be refunded.
}  
module.exports={
    getPatientDetais:getPatientDetails,
    getProfile:getProfile,
    updateProfile:updateProfile,
    getCreateAppointment:getCreateAppointment,
    createAppointment:createAppointment,
    cancelAppointment:cancelAppointment,
}