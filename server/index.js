import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js";
dotenv.config()
import cookieParser from "cookie-parser";
import cors from "cors"
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json()) //express.json() lets the backend read JSON request data.
app.use(cookieParser()) //cookieParser() lets the backend read cookies, including authentication cookies.

app.use("/api/auth" , authRouter) // authrouter use karna
app.use("/api/user",userRouter )

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{                                       //app.listen() → starts the server and tells it which port to listen on.
    console.log(`Server running on port ${PORT}`)
    connectDB()
});