import React from 'react'

const Card = ({user}) => {
        
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
                          <button className="btn  btn-secondary">Intrested</button>
                          <button className="btn   btn-primary ">Ignore</button>
                   </div> 
           </div>
           </div>



    </div>
  )
}

export default Card