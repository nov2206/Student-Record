const mongoose = require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/studentbase")
        console.log("it connect the database")
    }
    catch(error){
        console.log("error" ,error)
    }
}

// connectDB()

module.exports = connectDB