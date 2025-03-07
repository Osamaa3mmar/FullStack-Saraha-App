import express from 'express';
import { initApp } from './src/index.router.js';
const app= express();
initApp(app,express);




app.listen(4939,()=>{
    console.log(" listening on 4939");
})