import mongoose from "mongoose";
import userModel from "../userModel/user.module.js";
const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    assignTo: String,
    deadline: Date,
})

const taskModel = mongoose.model('Task', taskSchema)

export default taskModel;








