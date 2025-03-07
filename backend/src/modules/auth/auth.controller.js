import bcrypt from "bcryptjs";
import userModel from "../../../DB/models/user.model.js";
import { sendEmail } from "../../utils/Email.service.js";
import jwt from 'jsonwebtoken';


export const signUp=async(req,res)=>{
    try{
    const {email,password,username}=req.body;
    const hash = bcrypt.hashSync(password, 8);
    const user=await userModel.create({email,password:hash,username});
    if(user){
        sendEmail(email,"Confirm Email",'<button>osama</button>');
        return res.status(201).json({message:'User created successfully check your email to confirm your account !'});
    }
    return res.json({message:' failed'});
}catch(err){
    return res.status(500).json({message:'Internal Server Error',err});
}
}

export const virefiyEmail=async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    const user=await userModel.findByPk(id,{
        attributes:['emailValidate','id']
    });
    if(user){
        if(user.emailValidate){
        return res.status(409).json({message:'Email allready confirmed !'});
        }
        user.emailValidate=true;
        user.save();
        return res.status(200).json({message:'Email confirmed successfully'});
    }
    return res.status(404).json({message:'email not found'});
}



export const login =async (req,res)=>{
    const {username,password}=req.body;
    const user =await userModel.findOne({where:{username:username}});
    if(user){
        if(user.emailValidate==1){
            const check=bcrypt.compareSync(password,user.password);
            if(check){
                const token=jwt.sign({id:user.id,username:user.username,email:user.email},"saraha");
                return res.status(200).json({message:'success',token:token});
            }
            else{
                return res.status(401).json({message:' wrong password !'});
            }
        }
        return res.status(400).json({message:"Email not virefiyed check your email address !"});
    }
    return res.status(404).json({message:'User not found'});
}