const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


/**
 * @name registerUserController
 * @description register a new user,excepts username,email and password int the request body
 * @access Public 
 */



async function registerUserController(req,res){
    const {username,email,password} = req.body

    if(!username || !email || !password){
        return res.status(400).json({
            message:"Please provide all required fields"
        })
    }
    const isUserAlreadyExist = await userModel.findOne({
        $or:[{username},{email}]
    })
    if(isUserAlreadyExist){

        /*isUserAlreadyExists.username==username*/
        return res.status(400).json({
            message:"User already exists with this username or email"
        })
    }

    const hash= await bcrypt.hash(password,10)

    const User = await userModel({
        username,
        email,
        password:hash
    })
    const token = jwt.sign(
        {id:User._id,username: User.username},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )
    res.cookie("token",token)

    res.status(201).json({
        message:"User registered successfully",
        user:{
            id:User._id,
            username:User.username, 
            email:User.email
        }
    }
    )}

/**
 * @name loginUserController
 * @description login a user,excepts email and password int the request body
 * @access Public   
 */
async function loginUserController(req,res){
    const {email,password} = req.body

    const user = await userModel.findOne({email})
    
    if (!user){
        return res.status(400).json({
            message:"User not found"
        })
    } 
    const isPasswordValid = await bcrypt.compare(password,user.password)  
    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid password"
        })
    }
        const token = jwt.sign(
            {id:user._id,username: user.username},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )
        res.cookie("token",token)
        res.status(200).json({
            message:"User logged in successfully",
            user:{
                id:user._id,
                username:user.username, 
                email:user.email
            }
        })
}

module.exports = {
    registerUserController,
    loginUserController
}   