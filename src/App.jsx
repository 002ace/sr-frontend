import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Feed from "./components/Feed"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Connections from "./components/Connections"
import Request from "./components/Request"
function App() {


  return (
     
       <div  className =""> 
          
             <Provider   store={appStore}>
              <BrowserRouter   basename="/" >


                   <Routes>

                          <Route path ="/"   element = {<Body/>}>
                                   <Route   path   = "/"  element = {<Feed/>}/>

                                   <Route path="/login"  element = {<Login />} />

                                   <Route path = "/profile" element = {<Profile/>} />

                                   <Route path = "/connection" element = {<Connections/>} />

                                   <Route path = "/request"  element = {<Request/>} />
                         </Route>
                     
                   </Routes>


              </BrowserRouter>

              </Provider>
         



          

       </div>

    
  )
}

export default App
