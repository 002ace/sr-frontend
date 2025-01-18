import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../utils/userSlice';
import { useNavigate ,Link } from 'react-router-dom';









const Navbar = () => {
      
        
    const user  =  useSelector((store) => store.user);
    const dispatch  =  useDispatch();
    const navigate =  useNavigate();

   console.log(user);
    const logout  =  async()=>{

        try{

            await axios.post("http://localhost:4000/api/logout" , {withCredentials:true})
            dispatch(removeUser());
            navigate("/login")
            

        }
        catch(error)
        {
            console.log(error.message);
        }
       
    }
  return (
    <div   className='mx-auto  '>
          
          <div className="navbar bg-base-200">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">devTinder</a>
  </div>
  <div className="flex-none gap-2   mr-5">

     <div>

      {
        user !== null &&    <p>welcome  {user.firstName}</p>
      }
     
     </div>

    
    <div>
      {
          user  !==null && 
          <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>





          <Link   to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li  onClick={logout} ><a>Logout </a></li>
      </ul>
    </div>
      }
    </div>
    
  </div>
</div>

    </div>
  )
}

export default Navbar