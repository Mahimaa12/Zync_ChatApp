import mongoose from "mongoose";
import User from '../Models/UserModel.js'

const register=async(req,res)=>{

 const  {name,email,password,pic} = req.body;

 if(!name || !email || !password)
 {
    res.status(400).send("Enter All the fields")
    throw new Error("Enter All the Required Fields")
 }

 const usercheck= await User.findOne({email})      
 
 if(usercheck)
 {
    res.status(400).send("User Already Exists")
    throw new Error("User with this details Already exists")

 }

 const user= await User.create({
    name,email,password,pic
 })

 if(user)
 {
    res.status(200).send(
        {
            name:user.name,
            id:user._id,
            password:user.password,
            isAdmin:user.isAdmin,
            email:user.email,
            pic:user.pic
        }
    )
 }
 else
 {
    res.status(500).send("Couldnt Able to create User")
    throw new Error("Couldnt able to add user inside the database")
 }


}

export default register