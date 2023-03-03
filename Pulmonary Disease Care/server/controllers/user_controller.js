
import User from "../model/UserModel.js";
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


//--------------------USER REGISTER---------------------

export const RegUser = asyncHandler(async(req,res) =>{
    try{
        console.log(req.body)
         const { email, username, password } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
    
        // Create user
        const newUser = new User({
          email: email,
          username: username,
          password: hashedPassword,
        });
            // Save user to database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
    }
    catch(error){
        res.status(209).json({message:error.message});
    }

})

//-----------------ADMIN REGISTER-------------------------
export const Regadmin = asyncHandler(async(req,res) =>{
    try{
       
        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash('admin', saltRounds);
    
        // Create user
        const newUser = new User({
          email: 'admin@123',
          username: 'admin',
          password: hashedPassword,
          role:'admin'
        });
            // Save user to database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
    }
    catch(error){
        res.status(209).json({message:error.message});
    }

})

//-----------------USER LOGIN-------------------------
export const Oathuser= asyncHandler(async(req,res) =>{
try {
    const {email, password } = req.body
    const user = await User.findOne({ email })
    if (!email || !password) {
        res.status(400).json({ msg: 'Something missing' })
      }
    // res.send(user)

   if(user && (await bcrypt.compareSync(password,user.password))){
  res.json({
      _id:user._id,
      name:user.username,
      email:user.email,
      role:user.role,
    })
   }
   
 

   else{
    res.status(401);
    throw new Error("Invalid Email or Password");
   }
} catch (error) {
    res.status(209).json({message:error.message});
}
})