import React, { useState } from "react";
import { motion, useMotionValueEvent } from "framer-motion";
import { useScroll } from "motion/react"
function Work(){
    var [images,setImages]=useState([
        {href:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:'53%' , left:'50%' , isActive:false},
        {href:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:'80%' , left:'36%' , isActive:false},
        {href:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:'63%' , left:'69%' , isActive:false},
        {href:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:'32%' , left:'49%' , isActive:false},
        {href:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:'79%' , left:'48%' , isActive:false},
        {href:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:'55%' , left:'52%' , isActive:false},
        {href:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:'70%' , left:'50%' , isActive:false},
    ])
        

    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (data) => {
      function imagesShow(arr) {
        setImages((prev) =>
          prev.map((item, index) =>
            arr.indexOf(index) === -1
              ? { ...item, isActive: false }
              : { ...item, isActive: true }
          )
        );
      }
      switch (
        Math.floor(data * 100) //the *100 is to make it percent
      ) {
        case 0:
          imagesShow([]);
          break;
        case 1:
          imagesShow([0]);
          break;
        case 2:
          imagesShow([0, 1]);
          break;
        case 3:
          imagesShow([0, 1, 2]);
          break;
        case 4:
          imagesShow([0, 1, 2, 3]);
          break;
        case 6:
          imagesShow([0, 1, 2, 3, 4]);
          break;
        case 8:
          imagesShow([0, 1, 2, 3, 4, 5]);
          break;
      }
    });

    return (
        <div className="w-full mb-20 ">
            <div className="relative max-w-screen-lg mx-auto ">
                <h1 className= "font-[350]  text-[29vw] text-center tracking-tighter select-none leading-none">work</h1>
                <div className="absolute top-0 w-full h-full">
                    {images.map((elem,index)=>(elem.isActive && (<img className="opacity-90 absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%] " src={elem.href} style={{top:elem.top,left:elem.left}} alt="" />)))}
                </div>
            </div>
        </div>
    )
}
export default Work;