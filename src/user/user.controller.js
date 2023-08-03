import userModel from '../../database/models/userModel/user.module.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



export const getallUsers =  async (req, res) => {





    let users = await userModel.find()
    res.json(users)

}


export const signUp =  async (req, res) => {
    let { userName, email, password, age, gender } = req.body;

    try {
        let existingUser = await userModel.findOne({ email });

        if (existingUser) {
            console.log("Email already exists");
            return res.json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, Number(process.env.saltRounds));

        let data = await userModel.insertMany({ userName, email, password: hashedPassword, age, gender });

        res.json({ message: "done", data });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Server error" });
    }
}


export const logout =  async (req, res) => {
    let { _id } = req.body;

    try {
        let data = await userModel.findByIdAndUpdate(_id, { isLogin: false }, { new: true });

        if (data) {
            res.json({ message: "Logged out successfully.", data });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred." });
    }
}


export const updateUser= async (req, res) => {
    let { _id, userName, age } = req.body;
    console.log({ _id, userName, age });
    let data = await userModel.findByIdAndUpdate(_id, { userName, age }, { new: true });

    // Check if user is logged in
    if (!data.isLogin) {
        return res.status(401).json({ message: 'User is not logged in' });
    }

    // Proceed with the update operation
    console.log(data);
    res.json({ message: "updated", data });
}

export const deleteUser= async (req, res) => {

    let { _id } = req.body;
    let data = await userModel.findByIdAndDelete(_id)
    if (data) {
        res.json({ message: "deleted", data });
    } else {
        res.status(404).json({ message: "user not found" });
    }

}
export const updatePassword= async (req, res) => {
    try {
        let { _id, password, } = req.body;
        const hashedPassword = await bcrypt.hash(password, Number(process.env.saltRounds));
        let data = await userModel.findByIdAndUpdate(_id, { password: hashedPassword }, { new: true });

        if (!data) {
            return res.status(404).json({ message: "User not found." });
        }
        res.json({ message: "Updated", data });



        console.log(data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred." });
    }
}



export const softDelete= async (req, res) => {
    let { _id } = req.body;

    try {
        let data = await userModel.findByIdAndUpdate(_id, { isDeleted: true }, { new: true });

        if (data) {
            res.json({ message: "soft deleted done", data });
        } else {
            res.json({ message: "user not found" });
        }
    } catch (error) {
        console.error(error);
        res.json({ message: "An error occurred." });
    }
}


export const signIn =  async (req, res) => {
    let { email, password } = req.body;

    try {
        let user = await userModel.findOne({ email });
        if (!user) {
            console.log("User not found. You need to sign up.");
            return res.json({ message: "User not found. You need to sign up." });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            console.log("Success! Logged in.");
            // Update isLogin to true when user logs in
            await userModel.findByIdAndUpdate(user._id, { isLogin: true });

            let token = jwt.sign({ userid: user._id, name: user.userName }, "route");
            return res.json({ message: "Success! Logged in.", token });
        } else {
            console.log("Incorrect password.");
            return res.json({ message: "Incorrect password." });
        }
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Server error" });
    }
}