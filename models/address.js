const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addressSchema = new Schema({
    State: {
    type: "String",
    enum: [
      "Andaman and Nicobar Islands",
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chandigarh",
      "Chhattisgarh",
      "Dadra and Nagar Haveli",
      "Daman and Diu",
      "Delhi",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Ladakh",
      "Lakshadweep",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Puducherry",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ]},
  District:{
      type:'String',
      required:true
  },
  City:{
      type:'String',
      required:true
  },
  streetAdress1:{
    type:'String',
    required:true
  },
  streetAdress2:{
    type:'String',
    required:true
  },
  postalCode:{
    type:'String',
    required:true
  },
  landmark:{
    type:'String',
    required:true
  }
});

module.exports= mongoose.model('Address',addressSchema);