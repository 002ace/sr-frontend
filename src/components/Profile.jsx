import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { adduser } from '../utils/userSlice';

const Profile = () => {

       const [firstName, setFirstName] = useState(""); // String for first name
      const [lastName, setLastName] = useState("");  // String for last name
      const [age, setAge] = useState("");          // Number for age (changed to string input)
     const [gender, setGender] = useState("");      // String for gender
     const [skills, setSkills] = useState("");        // String for skill input (to be split into an array)
     const [about, setAbout] = useState("");        // String for about

     const  distpatch   =   useDispatch();
     const user = useSelector((store)=>store.user)

     console.log(user);
  
  const update = async () => {
    try {
      // Convert skills string to array by splitting at commas
      const skillsArray = skills ? skills.split(',').map(skill => skill.trim()) : [];

      // Prepare the data to be sent to the backend
      const dataToUpdate = {
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        age: age ? parseInt(age) : undefined, // Ensure age is a number
        gender: gender || undefined,
        skills: skillsArray.length > 0 ? skillsArray : undefined, // Only send skills if not empty
        about: about || undefined
      };

      const res = await axios.patch("http://localhost:4000/api/updateprofile", dataToUpdate, { withCredentials: true });

     

      distpatch(adduser(res.data.updateDetails))
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    update();
  };

  return (
    <div  className='flex  w-11/12 mx-auto justify-evenly '>
      <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-11">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input type="text" placeholder="First Name" className="input input-bordered" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input type="text" placeholder="Last Name" className="input input-bordered" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input type="number" placeholder="Age" className="input input-bordered" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <input type="text" placeholder="Gender" className="input input-bordered" value={gender} onChange={(e) => setGender(e.target.value)} />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">About</span>
            </label>
            <input type="text" placeholder="About" className="input input-bordered" value={about} onChange={(e) => setAbout(e.target.value)} />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Skills (comma separated)</span>
            </label>
            <input type="text" placeholder="Skills" className="input input-bordered" value={skills} onChange={(e) => setSkills(e.target.value)} />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">Update</button>
          </div>
        </form>
      </div>


      <div  className='flex justify-center items-center mt-6 '>  


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
                  
           </div>
           </div>



     </div>


      

       
    </div>
  )
}

export default Profile;
