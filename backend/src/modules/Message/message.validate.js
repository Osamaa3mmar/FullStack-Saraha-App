import Joi from "joi";



export const messageSchema = Joi.object({
    title:Joi.string().required(),
    content: Joi.string().required(),
    receverId: Joi.number().required(),
})