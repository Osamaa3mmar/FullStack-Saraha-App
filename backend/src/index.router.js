import { connectDB } from '../DB/Connection.js';
import userRouter from './modules/User/user.router.js';
import authRouter from './modules/auth/auth.router.js';
import messageRouter from './modules/Message/message.router.js';
export const initApp=(app,express)=>{
    app.use(express.json());
    connectDB();
    app.use('/users',userRouter);
    app.use('/auth',authRouter);
    app.use('/message',messageRouter);
    console.log("init");
}