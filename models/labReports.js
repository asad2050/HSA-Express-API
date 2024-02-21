const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const testSchema= new Schema({
    name:{
        type:String,
        required:true
      },
    description:{ // such as fasted, non fasted, 
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
        enum :['blood','urine','x-ray','mri']//sample enums
    },
    feesAmount:{
        type:Double,
        required:true
    }
});

const labReportSchema = new Schema({
  test: { type: Schema.Types.ObjectId, ref: "Test" },
  patient: { type: Schema.Types.ObjectId, ref: "Patient" },
  appointment:{
  type:Schema.Types.ObjectId, 
    ref:'Appoitment'
  },
  reportDate: { type: Date, required: true },
  result: { type: String, required: true },
  description: { type: String},
  comments: { type: String },
});
const Test= mongoose.model('Test',testSchema);
const LabReport= mongoose.model('LabReport',labReportSchema);
module.exports={Test,LabReport}