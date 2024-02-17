// number of staff , no. of nurse, no. of doctors and their refs will be stored here.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shiftSchema = new Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
});
const staffSchema = new mongoose.Schema({
  totalDoctors: { type: Number, required: true },
  totalNurse: { type: Number, required: true },
  doctors: [{ type: Schema.Types.ObjectId, ref: "Doctor" }],
  chiefDoctor: { type: Schema.Types.ObjectId, ref: "Doctor" },
  nurse: [
    {
      type: Schema.Types.ObjectId,
      ref: "Nurse",
    },
  ],
  admin:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
});
const HospitalSchema = new Schema({
    staff:{type:Schema.Types.ObjectId,
        ref:'Staff'},
    totalBeds: {
        type:Number
    },
    speciality:[{
        type:String,
        enum:['Nose Ear Throat','Diabetes','Cardiac','Peadiatric','general'],
        required: true
    }

    ],
    service:[
        {type:String,
        enum:['OPD','IPD','ICU','Surgery']}
    ],
    Address:{
        type:Schema.Types.ObjectId,
        ref:'Address',
        required:true
    }
});
const Shift = mongoose.model("Shift", shiftSchema);
const Staff = mongoose.model('Staff',staffSchema);
const Hospital = mongoose.model('Hospital',HospitalSchema);

module.exports = { Shift,Staff,Hospital};
