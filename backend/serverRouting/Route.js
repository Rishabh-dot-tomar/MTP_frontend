import express from 'express';
const router= express.Router()
import patientData from '../database/patientData_database.js'


router.route('/signup').post((req,res)=>
        {
            const database =req.body;
            patientData.create( 
                        database,(err,data)=>{
                                               if (err){
                                                        res.status(500).send(err)
                                                       }
                                               else{
                                                    res.status(201).send(data)
                                                   }
                                              }
                        )
            
        })

export default router
