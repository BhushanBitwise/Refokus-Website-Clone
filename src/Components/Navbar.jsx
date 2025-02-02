import React from "react";
import Button from "./Button";
function Navbar(){
  return(
    <div className=" max-w-screen-lg mx-auto p-3 py-4 flex items-center justify-between border-b-[2px] border-zinc-700">
           <div className="nLeft flex items-center">
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <div className="links flex gap-10 ml-30 ">
                {["Home","Work","Culture","","News"].map((elem,index)=>
                (
                    elem.length===0 ? <span key={index} className="w-[2px] h-8 bg-zinc-700"></span> :(<a key={index} href="#" className="flex items-center gap-1">
                        {index===1&& <span style={{boxShadow:"0 0 0.65em #00FF19"}} className="inline-block w-[0.9vh] h-[0.9vh] rounded-full  bg-green-600"></span>}
                        {elem}</a>)
                ))}
                </div>
           </div>
           <Button/>
    </div>
  )
}
export default Navbar;














