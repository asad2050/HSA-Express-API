const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  contact: [{ type: Number }],
  appointments: [
    {
      type: Schema.Types.ObjectId, //the doctor name will be in the appointments as reference.
      ref: "Appointment",
    },
  ],
  tempAdress: {
   type:Schema.Types.ObjectId,
   ref:'Address',
   required:true
  },
  permanentAdress: { 
    type:Schema.Types.ObjectId,
    ref:'Address',
    required:true
  }
});
