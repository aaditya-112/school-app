import User from "../models/user.Model.js";
import bcrypt from "bcrypt";

export const newUser = async (req, res) => {
  const {email, password, role } = req.body;
  try {
    // check if all values are sent by user or not 
    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if password length is less than 6
    if(password.length < 6){
        res.status(400).json({message:"Password must have at least 6 characters"})
    }

    // check if user is all ready exist in database
    const user =await User.findOne({email});
    if(user) return res.status(400).json({message:"User already exist"})
    

    // hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating and saving user data in database

    const newuser= new User({
        email,
        password : hashedPassword,
        role,
    })

    await newuser.save();
    res.status(200).json({message:`User Created ${newuser.email}, id ${newuser._id}`});
    
    
  } catch (error) {
    console.log(`Error in newUser controller`,error.message);
    res.status(500).json({message:`Internal server error ${error.message}`})
  }
};

export const login = async (req, res) => {
  res.send("hi it's login route");
};

export const logout = async (req, res) => {
  res.send("hi it's logout route");
};
