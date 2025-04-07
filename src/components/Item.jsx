import React, { useEffect, useState } from 'react'
import Cart from './Cart';

function Item() {
    const [data, setdata] = useState([]);
      const fetchTopRestaurant = async () => {
        const response = await fetch ('http://localhost:5000/top-restaurant-chains');
        const apidata = await response.json();
        setdata(apidata);
      };
      useEffect(() => {
        fetchTopRestaurant();
      }, []);
  return (
    <>
      <div className="max-w-[1200px] mx-auto  ">
            <div className=" flex my-3 items-center justify-between">
              <div className=" text-[25px] font-bold">What's on your mind?</div>
              
          </div>  
    
    <div className='grid grid-cols-4 gap-3'>
         {
            data.map(
                (d,i)=>{
                    return <Cart {...d}></Cart>
                }
            )
         }
    </div>
    </div>
    </>
  )
}

export default Item
