import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRoutes from './Routes/UserRoute.js'

dotenv.config()

const app=express()
app.use(express.json());

mongoose.connect(process.env.URI)
.then(()=>{console.log("MongoDB Connected Successfully")})
.catch((err)=>{
    console.log("Couldnt able to connect to Database")
})
app.listen(process.env.PORT,()=>
{
    console.log("Server Connected to the port 5000")
})

app.use("/chatapp",UserRoutes)

