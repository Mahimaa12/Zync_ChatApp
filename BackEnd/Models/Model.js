import mongoose from "mongoose";

const UserSchema=mongoose.model(
    {
        name:{type:"String",required:true},
        email:{type:"String",required:true},
        password:{type:"string",required:true},
        pic:{type:"String",default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"},
        isAdmin:{type:Boolean ,required:true,default:false}
    },
    {timestamps:true
    }
)

const User=mongoose.model("User",UserSchema)

module.exports=User