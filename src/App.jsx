import React from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marquees from "./Components/Marquees";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import LocomotiveScroll from 'locomotive-scroll';


function App(){
const locomotiveScroll = new LocomotiveScroll();

  return(
    <div className="w-full h-screen bg-zinc-900 text-white font-Gilroy ">
        <Navbar/>
        <Work/>
        <Stripes/>
        <Products/>
        <Marquees/>
        <Cards/>
        <Stripes/>
        <Footer/>
      </div>
  )
}
export default App;