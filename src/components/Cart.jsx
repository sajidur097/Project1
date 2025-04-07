import React from "react";
import Star from "./Star";

 export default function Cart  (props){
  

  return (
    <>
      
          <div className="w-[273px] shrink-0 grow mb-2">
            <div className=" group h-[182px] rounded-[15px] overflow-hidden relative">
              <img
                className=" group-hover:scale-110 duration-150 object-cover w-full h-full"
                src={
                  "http://localhost:5000/images/" + props.image
                }
              ></img>
              <div className="image-overflay absolute w-full h-full top-0 flex items-end p-2 text-[25px] front-bold text-white traking-tighter ">
                {props.offer}
              </div>
            </div>
            <div className="mt-3 text-xl font-bold">
              {props.title}
            </div>
            <div className="flex" >
            
             <Star className="inline"></Star> {props.rating}
             <span className="ml-2"> {props.minTime} -{props.maxTime}  </span>
            </div>
            <div className="text-slate-700">
              {props.name}
                <br></br>
            {props.place}
            </div>
          </div>
 
    </>
  );
}











