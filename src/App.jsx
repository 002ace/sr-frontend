import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Feed from "./components/Feed"
import Login from "./components/Login"
function App() {


  return (
     
       <div  className =""> 
          

              <BrowserRouter   basename="/" >


                   <Routes>

                          <Route path ="/"   element = {<Body/>}>
                                   <Route   path   = "/"  element = {<Feed/>}/>

                                   <Route path="/login"  element = {<Login />} />
                         </Route>
                     
                   </Routes>


              </BrowserRouter>
         



          

       </div>

    
  )
}

export default App
