import express from "express"
import { googleAuth, logOut } from "../controllers/auth.controller.js"

const authRouter = express.Router() //  Creates a separate router for authentication-related URLs.

authRouter.post("/google", googleAuth)  //When a POST request comes to /google, send it to the googleAuth controller. When logging in, the frontend sends user data to the backend. THATS WHY POST
authRouter.get("/logout", logOut)  //Your logout route tells the backend to clear the cookie.


export default authRouter