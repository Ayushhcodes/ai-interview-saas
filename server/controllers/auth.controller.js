import genToken from "../config/token.js"
import User from "../models/user.model.js"

//User = Model / Blueprint , user = Actual user document

export const googleAuth = async (req,res) =>{    //Your route calls googleAuth, so the controller needs to be exported. ✅
    try {
        const {name, email} = req.body           //We take the user's name and email from the frontend request.
        let user = await User.findOne({email})  //MongoDB searches for a user with that email.
        if(!user){
            user = await User.create({
                name,
                email
            })
        }
        let token = await genToken(user._id)  //Generate the token ,user._id → genToken() → token
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite:"strict",
            maxAge: 7*24*60*60*1000
        })

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message: `Google auth error ${error}`})
    }
}

export const logOut = async ( req,res ) =>{
    try {
        await res.clearCookie("token")
        return res.status(200).json({message: "Logout successfully "})
    } catch (error) {
        return res.status (500).json ({meessage: `Logout error ${error}`})
        
    }
}


/*
1. user._id
      ↓
2. genToken(user._id)
      ↓
3. JWT token is generated
      ↓
4. let token stores that JWT
      ↓
5. res.cookie("token", token, ...)
      ↓
6. JWT is stored in browser cookie

*/