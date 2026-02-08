import dotenv from 'dotenv';
dotenv.config({path: '../.env'}); // if we imported and configured our dotenv in this main file then our whole backend will get access to this dotenv environment variables and we can use it in any file of our backend without importing and configuring it again and again in every file, we just need to import it once in the main file and then we can use it in any file of our backend
import connectDB from './db/index.js';
import app from './app.js';


connectDB()
.then(
    ()=>{
        const port=process.env.PORT || 3000;
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        })
        app.on('error',(error)=>{
            console.log("Error starting the server:",error);
        })
    }
). catch(
    (error)=>{
        console.log("Error connecting to MongoDB:", error);
        process.exit(1);
    }
)

