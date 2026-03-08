const mongoose = require("mongoose")
require('dotenv').config()
const PW=process.env.PASSWORD
const DB_URL=process.env.DB_URL


  const connectDB=async()=>{
    try {
        await mongoose.connect(DB_URL.replace('<db_password>',PW))
        console.log('Connected!');
        

    } catch (error) {console.log(error.message);
    
        
    }
  }
  module.exports=connectDB
