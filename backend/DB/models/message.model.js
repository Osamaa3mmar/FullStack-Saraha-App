import { DataTypes } from "sequelize";
import sequelize from "../Connection.js";
import userModel from "./user.model.js";


const messageModel=sequelize.define("Message",{
    id:{
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false,
    },
    image:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    title:{
        type:DataTypes.STRING(20),
        allowNull:false,
        
    },
    status:{
        type:DataTypes.ENUM("show","hide"),
        allowNull:false,
        defaultValue:"hide",

    },
})


userModel.hasMany(messageModel,{foreignKey:'senderId',as:"sentMessages"});
userModel.hasMany(messageModel,{foreignKey:'receverId',as:"recevedMessages"});


messageModel.belongsTo(userModel,{foreignKey:"senderId",as:"sender"});
messageModel.belongsTo(userModel,{foreignKey:"receverId",as:"recever"});





export default messageModel;