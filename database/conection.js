import mongoose from 'mongoose';

export const connection = ()=>{

    mongoose.set("strictQuery" , true)
    mongoose.connect(process.env.connectioURL).then(() => {
        console.log("connected to mongodp");
    }).catch((err) => {
        console.log("error connecting to mongodp");
    });
}