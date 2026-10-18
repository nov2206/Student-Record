const mongoose = require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect(process.env.CONNECT_DB)
        console.log("it connect the database")
    }
    catch(error){
        console.log("error" ,error)
    }
}

// connectDB()

module.exports = connectDB