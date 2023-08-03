import *  as  dotenv from 'dotenv'
dotenv.config()

import { connection } from "./database/conection.js";
import  express, { Router }  from "express";
import router from "./src/user/user.routes.js";
import userRouter from './src/user/user.routes.js'
import taskRoute from "./src/task/task.routes.js"





connection()


const app = express()
const port = 3000

app.use(express.json());
app.use( '/user' ,userRouter);
app.use('/task', taskRoute);



app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))

