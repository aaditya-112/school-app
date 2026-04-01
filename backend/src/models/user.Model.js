import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
      email:{
        type: String,
        required : true,
        unique: true
      },
      password:{
        type: String,
        required: true,

      }  ,
      role:{
        type: String,
        enum:['admin','teacher','student'],
        required :true,
      },
    }
);

const User = mongoose.model(userSchema);
 export default User;