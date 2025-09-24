import React, { use } from 'react';
import userImg from "../../assets/user 1.png"

const AvailablePlayers = ({playerPromise}) => {
    const playerData = use (playerPromise)
    console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
  </figure>
  <div className="mt-4">
   <div className='flex'>
    <img src={userImg} alt="" /> <h2 className="card-title ml-2">Virat kholi</h2>
   </div>
   <div>
    
   </div>



    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
       </div>
        </div>
    );
};

export default AvailablePlayers;