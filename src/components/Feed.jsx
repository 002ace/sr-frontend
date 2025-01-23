import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';

const Feed = () => {
       
      const feed  =  useSelector((store) =>  store.feed);
       const  dispatch  =  useDispatch();
       const fetchFeed =  async() =>{
           try{ 
                  
                if(feed != null) return 
                
                 
                 const res  =  await  axios.get("http://localhost:4000/api/feedapi" , {withCredentials:true});


                 dispatch(addFeed(res?.data?.data))

             

                  

           }
           catch(error)
           {
                console.log(error.message);
           }
       }



       useEffect(()=>{

           fetchFeed();



       } , [])


       if(feed === null)  return <h1>no feed found</h1>
















   

     
         
  return  feed && (


    <div>   




            <Card      user = {feed[0]}   />      


          
         
        

           
            

      


    </div>
  )
}

export default Feed