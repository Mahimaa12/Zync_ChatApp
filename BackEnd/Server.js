import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app=express()

mongoose.connect(process.env.URI)
.then(()=>{console.log("MongoDB Connected Successfully")})
.catch((err)=>{
    console.log("Couldnt able to connect to Database")
})
app.listen(process.env.PORT,()=>
{
    console.log("Server Connected to the port 5000")
})