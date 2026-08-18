import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";


dotenv.config();   

const app = express();   
//express.json




const port = process.env.PORT;    


//one test route

app.get("/",(req,res)=>{
    res.send("HomelyHub Backend is running");
});

app.listen(port,()=>{
   console.log(`App is running on port number:${port}`);
})

