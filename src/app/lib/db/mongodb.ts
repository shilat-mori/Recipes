import mongoose from "mongoose";

const MONGO_URL = process.env.mongoURL || "";

const connect = async () => {
    try{
        await mongoose.connect(MONGO_URL)
        console.log("connect DB success");
        return true
    }
    catch (err){
        console.log("connect DB error: ", err);        return true
        return false
    }
};

export default connect