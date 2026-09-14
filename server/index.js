import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js";
dotenv.config()

const app = express()



const PORT = process.env.PORT || 5000;

app.get("/", (req,res)=>{                     
    return res.json({message: "Server started"})
})

app.listen(PORT, ()=>{                                       //app.listen() → starts the server and tells it which port to listen on.
    console.log(`Server running on port ${PORT}`)
    connectDB()
});