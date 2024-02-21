const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema= new Schema({
    patient:{
        type: Schema.Types.ObjectId,
        required:true
    },
    doctor:{
        type: Schema.Types.ObjectId,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
   slot:{
    type:Schema.Types.ObjectId,
    ref:'Slot',
    required:true
   },
    prescriptions:[{
    type:String,
    required:true}],
    testPrescribed:[{
        type:Schema.Types.ObjectId,
        ref:'Test'
    }],
    notes:{
        type:String
    },fees:{
        totalAmount:{
        type:Number,
        required:true
        },
        feesStructure:[
           {
           Amount:{
            type:Number,
            required:true
           },
            feesType: {
                type:String,
                enum:['OPD','ECG Fees','Others']  
            }
        }
        ]
    }
},{
    timestamps:true,
});
module.exports= mongoose.model('Appointment',appointmentSchema);