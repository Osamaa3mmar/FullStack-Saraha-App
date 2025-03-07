import {Sequelize} from "sequelize";

const sequelize = new Sequelize('sarahaapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


 export const connectDB=()=>{
        sequelize.sync().then(()=>{
            console.log("Connection established !");
        }).catch(()=>{
            console.log(" connection error !");
        })

}

export default sequelize;
