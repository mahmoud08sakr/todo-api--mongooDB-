import express from "express";
let router = express.Router();
import { auth } from "../auth.js";
import { addTask, afterDeadLine, deleteTask, getTask, updateTask } from "./task.controller.js";





router.post('/add', auth,addTask );



router.get('/getTask',getTask )


router.put('/update', auth, updateTask)




    

router.delete('/deleteTaskId', auth, deleteTask);


router.post('/afterDeadLine', auth, afterDeadLine);


export default router
