import React, { useEffect } from 'react'

import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from '../utils/userSlice'



const Body = () => {

       const user  =  useSelector((store) =>store.user)
       const dispatch =  useDispatch();
       const navigate  =  useNavigate();

       const fetchUser  = async()=>{

           try{

            
          
                 const res =  await  axios.get("http://localhost:4000/api/getprofile" , {withCredentials:true} )
                 
                 console.log("body - chal rhi hai ya nhi")
                 console.log(res);
                 dispatch(adduser(res.data.data));





           }
           catch(error)
           { 
                 if(error.status === 401)
                 {
                      navigate("/login")
                 }

                 

           }
           
           


       }


       useEffect(()=>{

        fetchUser();

       },[])

    
  return (
    <div>

         <Navbar />
         <Outlet/>


    </div>
  )
}

export default Body