import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';
import rainfall from "../assets/rainfall.mp4";
import b2 from "../assets/b2.mp4";
import b3 from "../assets/b3.mp4";
import b4 from "../assets/b4.mp4";
import b5 from "../assets/b5.mp4";
import b6 from "../assets/b6.mp4";
import b8 from "../assets/b8.mp4";
function Products(){
    var products =[
        {title:'arqi',description:'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.', live: true, case:false },
        {title:'TTR',description:'We ve created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.', live: true, case:true },
        {title:'YER',description:'Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.', live: true, case:false },
        {title:'Y11',description:' We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.', live: true, case:true },
        {title:'12Qq',description:'We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.', live: true, case:true },
        {title:'NAMI',description:' With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.', live: true, case:false },
        {title:'XEZA',description:'Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.', live: true, case:true },
        {title:'AXAA',description:'We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.', live: true, case:false },
        {title:'@)22',description:'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.', live: true, case:true },

    ]

    const [pos,setpos]=useState(0);
    var mover=(val)=>{
        setpos(val*20);
    }
    return(
        <div className='bg-zinc-900 border-b-[2px]  relative border-zinc-700'>
            {   products.map((val,index)=><Product key={index} mover={mover}index={index} val={val}/>)}
            <div className='absolute top-0 w-full h-full pointer-events-none'>
                <motion.div initial={{y:pos, x:"-50%"}} animate={{y:pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.6}} className='window absolute left-[35vw]  w-[25rem] h-[20rem]  overflow-hidden'> <video className="absolute object-cover rounded-3xl" autoPlay muted loop src={b8}></video> <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full '> </motion.div>
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full '><video className="absolute object-cover rounded-3xl" autoPlay muted loop src={b2}></video></motion.div>
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className=' w-full h-full '><video className="absolute object-cover rounded-3xl" autoPlay muted loop src={b3}></video></motion.div>
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className=' w-full h-full '><video className="absolute object-cover rounded-3xl" autoPlay muted loop src={b4}></video></motion.div>
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className=' w-full h-full '><video className="absolute object-cover rounded-3xl" autoPlay muted loop src={rainfall}></video></motion.div>
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className=' w-full h-full '><video className="absolute object-cover rounded-3xl" autoPlay muted loop src={b5}></video></motion.div>
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className=' w-full h-full '><video className="absolute object-cover rounded-3xl" autoPlay muted loop src={b6}></video></motion.div>
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className=' w-full h-full '><video className="absolute object-cover rounded-3xl" autoPlay muted loop src={b8}></video></motion.div>
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className=' w-full h-full '><video className="absolute object-cover rounded-3xl" autoPlay muted loop src={rainfall}></video></motion.div>
                    <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className=' w-full h-full '><video className="absolute object-cover rounded-3xl" autoPlay muted loop src={b2}></video></motion.div>

                </motion.div>
            </div>
        </div>
    )
}
export default Products;


