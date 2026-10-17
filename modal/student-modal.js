const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
  
    fname:{
        type:String,
    required: true
    },

    
    lname:{
        type:String,
       required: true
    }
    ,
    email:{
        type:String,
     required: true
    }
,
    
    phone_no:{
         type:Number,
   required: true
    },
    
    Address:{
        type:String,
        required: true
    }
})

const student = mongoose.model("studentbase",studentSchema);

module.exports = student