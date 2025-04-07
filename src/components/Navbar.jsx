import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { FaHireAHelper } from "react-icons/fa";
import { MdAssignmentInd } from "react-icons/md";
import { AiOutlineIdcard } from "react-icons/ai";
function Navbar() {
    const [toggle, setToggle] = useState(false);
    const showSideMenu = () =>{
        setToggle(true);
    }
    const hideSideMenu=()=>{
        setToggle(false);
    }
    const links = [
        {
            icon:<CiSearch />,
            name:"Search"
        },
        {
            icon:<BiSolidOffer />,
            name:"Offer"
        },
        {
            icon:<FaHireAHelper />,
            name:"Help"
        },
        {
            icon:<MdAssignmentInd />,
            name:"Signin"
        },
        {
            icon:<AiOutlineIdcard />,
            name:"Card"
        }
    ]
  return (
    <>
    <div className='black-overflow w-full h-full fixed duration-500'onClick={hideSideMenu} style={
        {
            opacity:toggle ? 1 : 0,
            visibility: toggle ? "visible": "hidden"
        }
    }>
        <div onclick = {(event)=>{
        event.stopPropagation();
        }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
         style={
            {
                left:toggle ?'0%' : '-100'
            }
         }> 
         </div>

    </div>
      <header className='p-[15px] shadow-xl sticky top-0 bg-white z-[9999]'>
       <div className='max-w-[1200px] mx-auto  flex items-center'>
         <div className='w-[100px]'>
            <img src='image/logo.png' className='w-full'></img>
         </div>
         <div className='text-2xl flex'>
         <span className='font-bold border-b-[3px]  '>Guwahati</span>, Assam, India 
         <IoMdArrowDropdown onClick={showSideMenu} className=' cursor-pointer text-[#fc8019]'/>
         </div>
         <div className=' text-slate-700 flex list-none gap-10 text-2xl flex list-none gap-5 ml-auto'>
            {
                links.map(
                    (links,index)=>{
                      return  <li key={index} className='text-slate-500 hover:text-[#fc8019] flex items-center gap-2'>
                        {links.icon}
                        {links.name}
                        </li>
           
                    }
                )
            }
            
           
         </div>
       </div>
      </header>
    </>
  )
}

export default Navbar
