import jwt from "jsonwebtoken";


export const auth=()=>{


    return (req,res,next)=>{
        try{

        const {token}=req.headers;

        if(!token){
            return res.status(401).json({message:'Unauthorized'});
        }
        const decoded = jwt.verify(token,'saraha');
        if(decoded){
            next();
        }
        else
        return res.status(401).json({message:'Unauthorized'});
    }
    catch(err){
        return res.status(401).json({message:'Unauthorized',err});

    }
    }
}