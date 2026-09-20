import jwt from "jsonwebtoken"

const isAuth = async (  req,res,next ) => {
    try {
        let {token} = req.cookies //Step 1: Get the token

        if(!token){
            return res.status(400).json({message: "User does not have a token"})
        }
        const verifyToken = jwt.verify(token , process.env.JWT_SECRET)   //Step 3: Verify the token
        if(!verifyToken){
            return res.status(400).json({message: "User does not have a token"})
        }
        req.userId = verifyToken.userId

        next()
    } catch (error) {
        return  res.status(500).json({message: ` isAuth error ${error}`})
    }
}  
    export default isAuth 