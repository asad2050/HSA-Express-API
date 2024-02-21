const { Timestamp } = require('mongodb');
const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        firstName: { type: String ,required: true},
        middleName: { type: String,} ,
        lastName: { type: String ,required: true}
    },
    email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type:String,
      required:true,
      enum:['patient','doctor','admin','labWorker','superAdmin']
      }
},{timestamps:true});
module.exports=mongoose.model('User',userSchema);