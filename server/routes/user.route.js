import express from "express"
import isAuth from "../middlewares/isauth.js"
import { getCurrentUser } from "../controllers/user.controller.js"


const userRouter = express.Router() //  Creates a separate router for authentication-related URLs.

userRouter.get("/current-user", isAuth, getCurrentUser)


export default userRouter