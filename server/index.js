import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()



const PORT = process.env.PORT || 5000;

app.get("/", (req,res)=>{
    return res.json({message: "Server started"})
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});