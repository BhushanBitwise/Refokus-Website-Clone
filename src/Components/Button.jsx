import React from "react";
import { IoIosReturnRight } from "react-icons/io";
function Button({title="Get Started"}){
  return(
    <div className="hover:animate-bounce   min-w-35 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between ">
        <span className="text-sm font-medium">{title}</span>
        <IoIosReturnRight className=" text-2xl font-bold " />
      </div>
  )
}
export default Button;