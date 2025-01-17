import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Feed from "./components/Feed"
import Login from "./components/Login"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
function App() {


  return (
     
       <div  className =""> 
          
             <Provider   store={appStore}>
              <BrowserRouter   basename="/" >


                   <Routes>

                          <Route path ="/"   element = {<Body/>}>
                                   <Route   path   = "/"  element = {<Feed/>}/>

                                   <Route path="/login"  element = {<Login />} />
                         </Route>
                     
                   </Routes>


              </BrowserRouter>

              </Provider>
         



          

       </div>

    
  )
}

export default App
