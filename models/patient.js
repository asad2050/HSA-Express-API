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
  },
  sex: {
    type: String,
  },
  phoneNumber: { type: Number, required: true },
  appointments: [
    {
      type: Schema.Types.ObjectId, //the doctor name will be in the appointments as reference.
      ref: "Appointment",
    },
  ],
  tempAdress: {
    type: Schema.Types.ObjectId,
    ref: "Address",
  },
  permanentAdress: {
    type: Schema.Types.ObjectId,
    ref: "Address",
  },
});
module.exports = mongoose.model("Patient", patientSchema);
