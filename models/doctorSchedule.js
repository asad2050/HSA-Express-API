//store the available dates and times , basically the time between start time and end time shifts
// can be given and only on working days. Basicall this will store the appointments slots.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slotSchema = new Schema({
  startTime: {
    type: Date, //convert the 
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  isBooked: {
    type: Boolean,
    default: false
  },
  Appointment:{
    type:Schema.Types.ObjectId,
    ref:'Appointment',
    required:true
  }
},{timestamps:true});

const scheduleSchema = Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  day: {
    type: Date,
    required: true
  },
  offDays: [{
    day:{
        type:Date,
        required:true
    },
   shift:{
    type:Schema.Types.ObjectId,
    ref:'Shift'
   }
  }],
  slots: [slotSchema]
},{timestamps:true});
// when a doctor logins we will show the todays booked slots and return the slot with the appointment populated
//When a doctor searches for appointments by specific date we will get it through the schedule.
//when saving we will check if the start time and endTime are between the time given between the shiftTime.
//Suppose we want to change the schedule such that all the appointments of a given day are blocked from acessing by patients.
//we can first create the appointment and then check in the Schedule if the day of creation is same day as a day in offDays and then check the start time and end time of 
// shift and appointment is between that time, 
//if not then
// we will check if the appointment time is between the start and endTime in shift model
// if its and then we will check ifTheSlotIsBooked , if not booked we will book that slot using
// a transaction. and return a success or failure response.
const Slot = mongoose.model('Slot', slotSchema);
const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = { Slot, Schedule };
