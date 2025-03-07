import bcrypt from "bcryptjs";
import userModel from "../../../DB/models/user.model.js";
import { sendEmail } from "../../utils/Email.service.js";



export const signUp=async(req,res)=>{
    const {email,password,username}=req.body;
    const hash = bcrypt.hashSync(password, 8);
    const user=await userModel.create({email,password:hash,username});
    if(user){
        sendEmail(email,"Confirm Email",'<button>osama</button>');
        return res.status(201).json({message:'User created successfully',user});
    }
    return res.json({message:' failed'});
}


export const virefiyEmail=async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    const user=await userModel.findByPk(id,{
        attributes:['emailValidate','id']
    });
    if(user){
        console.log(user);
        user.emailValidate=true;
        user.save();
        return res.status(200).json({message:'Email confirmed successfully'});
    }
    return res.status(404).json({message:'email not found'});
}