import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"

export const ServerUrl = "http://localhost:5000"  //ServerUrl simply tells the frontend where your backend is located.

const App = () => {
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
