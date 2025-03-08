import messageModel from "../../../DB/models/message.model.js";



export const sendMessage=async(req,res)=>{
    const {content,title,receverId}=req.body;
    const message=await messageModel.create({content,title,receverId});
    if(message){
        return res.status(201).json({message:'Message sent successfully !'});
    }
    return res.status(400).json({message:' message dose not sent'});
}


export const updateStatus=async (req,res)=>{
    const {id}=req.params;
    const message =await messageModel.findByPk(id);
    if(message){
        if(message.receverId!=req.decoded.id){
            return res.status(401).json({message:"Unauthorized"});
        }
        message.status==='show'?message.status='hide':message.status='show';
        await message.save();
        return res.status(200).json({message:'Message status updated successfully !',status:message.status});
    }
    else{
        return res.status(404).json({message:'message not found'});
    }
}