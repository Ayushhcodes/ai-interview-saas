import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { useEffect } from "react"
import axios from "axios"
import { ServerUrl } from "./config"


const App = () => {
  useEffect(()=>{
    const getUser = async ()=>{  {/* "Ask the backend who is currently logged in."*/}
      try {
        const result = await axios.get(ServerUrl+"/api/user/current-user", {withCredentials: true})
        console.log(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  },[])
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
