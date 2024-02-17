// to store doctor info.
// this will ref a schedule object which will ref the doctorSchedule
const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
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
        type: Number,
        required: true,
      },
      speciality:[
        {
            type:String, //eg speciality:['heart','diabetic',]
        }
      ],
      educationQualification:[{
        type:String
      }]
      ,
      contact: [{ type: Number }],
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