import mongoose from 'mongoose'


const patientData= mongoose.Schema({
    pid:Number, // userphonenumber
    addr:String

})

export default mongoose.model("patientData",patientData);