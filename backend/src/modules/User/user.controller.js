import messageModel from '../../../DB/models/message.model.js';
import userModel from '../../../DB/models/user.model.js';


export const getAllUsers=async (req,res)=>{
    const users=await userModel.findAll({attributes:['id','profilePic','username','RecevedCount']});
    if(users){
        return res.status(200).json({message:'success',users});
    }
    else{
        return res.status(404).json({message:'no users found !'});
    }
}




export const getSpecificUser=async (req,res)=>{
    const {id}=req.params;
    if(id){
        const user = await userModel.findOne({
            where: { id: id },
            attributes: ["id", "username", "profilePic", "RecevedCount"],
            include: [
                {
                    model: messageModel, 
                    as: "recevedMessages", 
                    attributes: ["id", "content","title", "createdAt"] ,
                    where: { status: "show" },
                    required: false
                }
            ]
        });
        if(user){
            return res.status(200).json({message:'success',user});
        }
        else{
            return res.status(404).json({message:'user not found'});
        }
    }
    else{
        return res.status(400).json({message:'id is not valid'});
    }
}



export const getProfile=async (req,res)=>{
    const {id}=req.params;
   
    if(id){
        if(id!=req.decoded.id){
            return res.status(403).json({message:'Unauthorized'});
        }
        const user = await userModel.findOne({
            where: { id: id },
            attributes: ["id", "username", "profilePic", "RecevedCount"],
            include: [
                {
                    model: messageModel, 
                    as: "recevedMessages", 
                    attributes: ["id", "content","title", "createdAt"],
                }
            ]
        });
        if(user){
            return res.status(200).json({message:'success',user});
        }
        else{
            return res.status(404).json({message:'user not found'});
        }
    }
    else{
        return res.status(400).json({message:'id is not valid'});
    }
}




export const setProfileImage=async (req,res)=>{
    const {id}=req.params;
    if(id!=req.decoded.id){
        return res.status(403).json({message:'Unauthorized'});
    }
    
}