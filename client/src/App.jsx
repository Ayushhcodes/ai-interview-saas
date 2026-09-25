import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { useEffect } from "react"
import axios from "axios"
import { ServerUrl } from "./config"
import { useDispatch } from "react-redux"
import { setUserData } from "./redux/userSlice"

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", {withCredentials:true})
        dispatch(setUserData(result.data))
      } catch (error) {
        console.log(error)
        dispatch(setUserData(null))
      }
    }
    getUser()
  },[dispatch])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </div>
  )
}

export default App
