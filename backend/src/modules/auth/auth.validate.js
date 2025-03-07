import joi from "joi";


export const signupSchema=joi.object({
    username:joi.string().min(4).required(),
    password:joi.string().min(5).required(),
    email:joi.string().email().required(),
})


export const loginSchema=joi.object({
    username:joi.string().min(4).required(),
    password:joi.string().min(5).required(),
    
})