import React from 'react'
import Image from "next/image"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import TicketBtnBig from "@/components/TicketDetails/TicketBtnBig"
import { urlFor } from "@/lib/client";

const FMCTop = ({logo,bgposter}) => {

  return (
    <div className="w-full relative h-[200px] lg:h-[500px] rounded-t-xl flex text-white">
        {/* title LOGO + sml desc + ticket link */}
        <div className="w-1/2 z-10 h-full absolute flex flex-col bg-gradient-to-r from-black justify-evenly gap-5 items-center rounded-t-xl">
            <img
            className="text-white font-semibold lg:w-[450px]"
            src={urlFor(logo)} width="150px" height="30px" alt="logo"/>

            <TicketBtnBig/>
        </div>
        {/* bg-image */}
        <div className="w-full h-full bg-black rounded-t-xl">
          <img 
          className="w-full h-full object-cover opacity-80 rounded-t-xl"
          src={urlFor(bgposter)} alt="bg-poster"/>       
        </div>


    </div>
  )
}

export default FMCTop