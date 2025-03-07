import { DataTypes } from "sequelize";
import sequelize from "../Connection.js";



const userModel=sequelize.define("User",{
    id:{
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false,

    },
    email:{
        type:DataTypes.STRING(50),
        unique: true,
        allowNull:false,

    },
    emailValidate:{
        type:DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING(60),
        allowNull:false,
    },
    profilePic:{
        type:DataTypes.STRING(200),
    },
    username:{
        type:DataTypes.STRING(20),
        allowNull:false,
        unique: true,
    },
    RecevedCount:{
        type:DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
})



export default userModel;