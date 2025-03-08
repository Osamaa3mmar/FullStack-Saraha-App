import {Sequelize} from "sequelize";

const sequelize = new Sequelize('freedb_sarahaapp', 'freedb_0ukmm', 'dvZg#?w6e&VQBTb', {
    
    host: 'sql.freedb.tech',
    port:3306,
    dialect: 'mysql'
  });


 export const connectDB=()=>{
        sequelize.sync().then(()=>{
            console.log("Connection established !");
        }).catch((err)=>{
            console.log(err);
        })

}

export default sequelize;
