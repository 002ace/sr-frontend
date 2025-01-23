import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConnection } from '../utils/connectionSlice'

const Connections = () => {
       const dispatch =  useDispatch()

       const connection =  useSelector((store) => store.connections);
       

      

       const connectionList  =  async() =>{

            try{  
                  if(connection !== null) return

                   const res  =  await axios.get("http://localhost:4000/api/freindlist"  ,  {withCredentials:true});

                 


                   dispatch(getConnection(res.data.data));

            }
            catch(error){
              console.log(error.message);

            }
           

       }

       useEffect(()=>{

           connectionList();

       }, [])

      

       if(connection ===  null)  return <h1>no connection found</h1>


  return (
    

 

<div className="flex justify-center items-center flex-wrap mt-6 gap-6">
{connection.map((connection, index) => (
  <div key={index} className="card bg-base-300 w-[400px] h-[300px] shadow-xl">
    <div className="flex flex-col justify-center items-center mt-6 space-y-3">
      <div className="">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="avatar"
          className="object-fit w-16 h-16 sm:w-24 sm:h-24 rounded-full"
        />
      </div>
      <div className="flex flex-col items-center gap-y-3">
        <h1 className="card-title">{connection.firstName + " " + connection.lastName}</h1>
        <h2 className="card-title">{connection.age} - {connection.gender}</h2>
        <h3 className="card-title">Become a passionate software developer</h3>
      </div>
    </div>
  </div>
))}
</div>


  )
}

export default Connections