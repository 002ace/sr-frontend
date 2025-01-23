import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest, removeRequest } from '../utils/requestSlice'

const Request = () => {

      const  request  =  useSelector((store) => store.request)
      const dispatch  =  useDispatch()

    
      console.log(request)
      const getRequest  =  async() =>{
          try{
               
               if(request !==  null) return;
               const res  =  await  axios.get("http://localhost:4000/api/requestreceived" , {withCredentials:true})

               console.log(res)

               console.log(res?.data?.freindListDetails);

               dispatch(addRequest(res?.data?.freindListDetails));

          }
          catch(error)
          {
               console.log(error.message);
          }
      }

      const handleRequest = async(status , _id)=>{
        
          try
          { 
                const res  =  axios.post("http://localhost:4000/api/status/"+status+"/"+_id ,  {} ,{withCredentials:true});

                dispatch(removeRequest(_id));

          }
          catch{

          }
          

      }


      useEffect(()=>{

         getRequest();


      } , [])


      if(request === null)  return <h1>no request found</h1>


  return (


  <div className="flex justify-center items-center flex-wrap mt-6 gap-6">
{request.map((request, index) => (
  <div key={index} className="card bg-base-300 w-[400px] h-[320px] shadow-xl">
    <div className="flex flex-col justify-center items-center mt-6 space-y-3">
      <div className="">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="avatar"
          className="object-fit w-16 h-16 sm:w-24 sm:h-24 rounded-full"
        />
      </div>
      <div className="flex flex-col items-center gap-y-3">
        <h1 className="card-title">{request.fromUserId.firstName + " " + request.fromUserId.lastName}</h1>
        <h2 className="card-title">{request.fromUserId.age} - {request.fromUserId.gender}</h2>
        <h3 className="card-title">Become a passionate software developer</h3>
      </div>

      <div className="card-actions justify-center">
                <button className="btn  btn-secondary" onClick={ ()=>handleRequest("accepted" ,  request._id)}>accept</button>
                <button className="btn   btn-primary "  onClick={ ()=>handleRequest("rejected" ,  request._id)}>reject</button>
       </div>
    </div>
  </div>
))}
</div>


   
  )
}

export default Request