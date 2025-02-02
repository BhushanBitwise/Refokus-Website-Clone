import React from 'react';
import Button from './Button';
import b2 from "../assets/b2.mp4";

function Product({val,mover,index}){

    return( 
    <div className='w-full py-20 bg-zinc-900 h-[20rem]  text-white'>
        <div onMouseEnter={()=>{mover(index)}} className='max-w-screen-lg mx-auto flex items-center justify-between'>
            <h1 className='text-5xl font-semibold  tracking-tighter'>{val.title}</h1>
            <div className='dets w-[50%] flex flex-col  items-center  text-center pl-20'>
                <p className='text-[1.4vw] hover:text-orange-200 hover:shadow-3xl opacity-60 w-[90%] mb-10 text-left font-semibold'>{val.description}</p>
                <div className=' flex items-cenetr gap-5'>
                        {val.live && <Button/>}
                        {val.case && <Button title="Case Study"/>}
                </div>
            </div>
        </div>
    </div>
  
    )
}
export default Product;
