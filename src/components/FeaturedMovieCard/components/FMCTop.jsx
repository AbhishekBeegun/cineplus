import React from 'react'
import Image from "next/image"
import TicketBtnBig from "@/components/TicketDetails/TicketBtnBig"
import tempimg from "../../../../public/images/uPPwAS7fduKLTnD6Esqsaj-removebg-preview.png"
const FMCTop = () => {
  return (
    <div className="w-full h-[200px] rounded-t-xl flex bg-gradient-to-r from-black text-white">
        {/* title LOGO + sml desc + ticket link */}
        <div className="w-full h-full flex flex-col justify-evenly gap-5 items-center">
            <Image
            className="text-white font-semibold"
            src={tempimg} width="150px" height="30px" alt="Transformers"/>

            <TicketBtnBig/>
        </div>
        {/* video trailer */}
        <div className="w-full h-full">
            Embed yt video here
        </div>


    </div>
  )
}

export default FMCTop