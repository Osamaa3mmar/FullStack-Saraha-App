import {Sequelize} from "sequelize";

const sequelize = new Sequelize('freedb_sarahaapp', 'freedb_0ukmm', 'dvZg#?w6e&VQBTb', {
    port:3306,
    host: 'sql.freedb.tech',
    dialect: 'mysql'
  });


 export const connectDB=()=>{
        sequelize.sync().then(()=>{
            console.log("Connection established !");
        }).catch(()=>{
            console.log(" connection error  ffff!");
        })

}

export default sequelize;
