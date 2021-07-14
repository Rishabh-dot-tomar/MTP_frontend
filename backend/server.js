import express from 'express'
import  mongoose from 'mongoose';
import cors from'cors'
import Routes from './serverRouting/Route.js'


const app =express();
app.use(express.json());


const port= process.env.PORT || 8001;

//middle layers
 app.use(cors());



const connection_url = "mongodb+srv://admin:rootroot@tinderclone.bcjmb.mongodb.net/MTP?retryWrites=true&w=majority"

// databse 
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.use("/",Routes)

app.get("/",(req,res)=> res.status(200).send("Helllo no World"))


//listering port 

app.listen(port, ()=> console.log("server is up and running"))