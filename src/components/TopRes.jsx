import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cart from "./Cart";
import { MdIndeterminateCheckBox } from "react-icons/md";

function TopRes() {
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
    <div className="max-w-[1200px] mx-auto  ">
      <div className=" flex my-3 items-center justify-between">
        <div className=" text-[25px] font-bold">Top Restaurant in Guwahati</div>
        <div className="flex">
          <div className=" cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-2">
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-2">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-hidden ">
        {
          data.map(
            (d,i)=>{
               return <Cart {...d} key={i}/>
            }
          )
        }
       
      </div>
      <hr className="my-6 border-t border-black-100 " />
    </div>
  );
}

export default TopRes;
