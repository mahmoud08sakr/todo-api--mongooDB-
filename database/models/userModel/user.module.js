import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    isLogin: { type: Boolean, default:false}

})

const userModel = mongoose.model('User' , userSchema)



export default userModel