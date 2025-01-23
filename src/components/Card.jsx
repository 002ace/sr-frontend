import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFeedById } from '../utils/feedSlice';


const Card = ({user}) => {


 console.log(user);
 
  const dispatch =  useDispatch();

 const intrestedOrIgnore  =  async(send , _id) =>{
     try
     {    
            const res   =   await axios.post("http://localhost:4000/api/send/"+send+"/"+_id ,  {} ,{withCredentials:true}) ;

            console.log(_id);
            dispatch(removeFeedById(_id));

           

          

     }
     catch(error)
     {
            console.log(error.message);
     }
 }
  
   

  if(user===null)   return <h1>no feed found</h1>


        
  return (
    <div  className='flex justify-center items-center mt-6'>  


            <div className="card bg-base-300 w-96 shadow-xl">
                  <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                         alt="image" />
                  </figure>
           <div className="card-body">
                     <h2 className="card-title">{user.firstName +" "+user.lastName}</h2>
                     <p>{user.age } - {user.gender}</p>
                     <p>{user.about  === ""  ?  "helloworld" : user.about}</p>
                     <div className="card-actions justify-center">
                          <button className="btn  btn-secondary"  onClick={()=>{intrestedOrIgnore("interested" , user._id)}}>Intrested</button>
                          <button className="btn   btn-primary "   onClick={()=>{intrestedOrIgnore("ignore" , user._id)}}>Ignore</button>
                   </div> 
           </div>
           </div>



    </div>
  )
}

export default Card