import React from "react";

function Footer() {
  return (
    <div className="w-full bg-zinc-900 pt-1 pb-5">
      <div className=" max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="select-none opacity-90 text-[9.5rem] ml-5  font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className=" mb-10 text-zinc-200 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-400">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className=" mb-10 text-zinc-200 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-400">{item}</a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end mr-10">
            <p className="text-right opacity-80 select-none">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img className="w-32 mt-12" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;