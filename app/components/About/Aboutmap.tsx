import React from 'react'
import { zodiak } from "@/app/fonts";

const Aboutmap = () => {
  return (
    <section className="relative bg-[#daebe3] pt-[120px] pb-[24px]">
      <div className="text-center bg-[url('/assests/header/logoimage/map_light_img.svg')] bg-top bg-[length:100%_auto] bg-no-repeat w-full mx-auto max-w-[1058px] md:min-h-[545px] min-h-[160px] flex flex-col items-center justify-center">
        <div className="max-w-[808px] mx-auto">
          <p className={`${zodiak.className} text-[20px] md:text-[36px] font-normal leading-[130%] text-[var(--dgreen)]`} >
         Leap Bridge Consultancy delivers exceptional sales process, and digital transformation services to build your future.
        </p>
        </div>
      </div>
    </section>
  )
}

export default Aboutmap
