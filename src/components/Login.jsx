import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adduser } from '../utils/userSlice';

const  Login = () => {

      const [email  , setEmail] = useState('');
      const [password , setPassword] =  useState('');

      const dispatch = useDispatch();
      
      const navigate  =  useNavigate();


      const  login  = async()=>{

          try
          {   
          
               const data  =   await  axios.post("http://localhost:4000/api/login" ,{ email,password } , {withCredentials:true})

            console.log("chal bhi rha hai ya nhi")
            console.log(data.data.user)

            dispatch(adduser(data.data.user));

            navigate("/")

          }

          catch
          {
              console.log("failed to fetch details")
          }

          

       

      }


       
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // Perform custom logic, e.g., validate, send data to server
    
  };




  return (
    <div className=' '>

<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl   mx-auto mt-11  ">
      <form className="card-body"  onSubmit={handleSubmit}   >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required  value={email}   onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-control">
          <label className="label" >
            <span className="label-text"  >Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required   value={password}  onChange={(e)=>setPassword(e.target.value)} />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"    onClick={()=>login()}>Login</button>
        </div>
      </form>
    </div>
             


    </div>
  )
}

export default Login