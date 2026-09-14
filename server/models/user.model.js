//Because our app needs to store information about each person using it. So the User Model defines what a user's data should look like in MongoDB.

import mongoose from "mongoose";

//basically the rulebook / blueprint for what a User document should look like in MongoDB.
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    credits:{
        type:Number,
        default:100
    }
}, {timestamps:true})

const User = mongoose.model("User", userSchema)

export default User