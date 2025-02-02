import React from "react";
function Stripe({val}){
    return(
        <div className="bg-zinc-900 mb-30 flex items-center justify-between w-[16.66%] py-4 px-4   border-t-[2px] border-b-[2px] border-r-[2px] border-zinc-700">
            <img className="w-30" src={val.url} alt="" />
            <span className="font-bold ">{val.number} </span>

        </div>
    )
}
export default Stripe;