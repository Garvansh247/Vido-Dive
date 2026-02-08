import mongoose from 'mongoose';
import DB_NAME from '../constants.js';
import dotenv from 'dotenv';
dotenv.config({path: '.env'});

const connectDB = async () => {
    try{
        const connectionInstance= await mongoose.connect(
            `${process.env.MONGO_URI}/${DB_NAME}`,
        );
        console.log("MONGO DB connected successfully to", connectionInstance.connection.host);
    } catch(error){
        console.error(error);
        process.exit(1); // by node.js convention, 0 means success and any other value means failure
        // by exiting with 1, we are saying that there is an error and the process is not successful
    }
};

export default connectDB;