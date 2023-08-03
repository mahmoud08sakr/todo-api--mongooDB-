import taskModel from "../../database/models/taskModel/task.module.js";
import jwt from 'jsonwebtoken'

export const addTask = async (req, res) => {


    let { title, description, status, userId, assignTo, deadline } = req.body;


    let added = await taskModel.insertMany({ title, description, status, userId, assignTo, deadline })
    if (added) {
        res.json({ messaeg: "done", added })
    } else {
        res.json({ messaeg: "failed" })
    }
}


export const getTask = async (req, res) => {

    let added = await taskModel.find().populate("userId", "-password ")
    if (added) {
        res.json({ messaeg: "done", added })
    } else {
        res.json({ messaeg: "failed" })
    }

}

export const updateTask = async (req, res) => {
    let { _id, title, description, status } = req.body;


    let data = await taskModel.findByIdAndUpdate(_id, { title, description, status }, { new: true });
    console.log(data);
    res.json({ message: "updated", data });

}

export const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.body;

        const deletedTask = await taskModel.findByIdAndDelete(taskId);

        if (deletedTask) {
            res.json({ message: "Task deleted successfully", deletedTask });
        } else {
            res.json({ message: "Task not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
}


export const afterDeadLine = async (req, res) => {
    try {
        const { taskId } = req.body;

        const task = await taskModel.findById(taskId, 'deadline');

        if (task) {
            const deadline = task.deadline;

            
            const isDeadlinePassed = new Date() > new Date(deadline);

            res.json({ deadline, isDeadlinePassed });
        } else {
            res.json({ message: "Task not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
}