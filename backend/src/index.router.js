import { connectDB } from '../DB/Connection.js';
import userRouter from './modules/User/user.router.js'
import authRouter from './modules/auth/auth.router.js' 
export const initApp=(app,express)=>{
    app.use(express.json());
    connectDB();
    app.use('/users',userRouter);
    app.use('/auth',authRouter)
    console.log("init");
}