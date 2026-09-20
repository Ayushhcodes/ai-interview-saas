import User from "../models/user.model.js" //It finds the logged-in user in MongoDB and sends their information to the frontend.

export const getCurrentUser = async (req,res) =>{
    try {
        const userId = req.userId  //Step 1: Get the user ID
        const user = await User.findById(userId) //Step 2: Find the user in MongoDB
        if(!user){
            return res.status(404).json({message: "User does not found"})
        }
        return res.status(200).json(user)  //Step 4: Send the user to the frontend
    } catch (error) {
         return res.status(500).json({message:`failed to get currentUser ${error}` })

    }
}