import React from 'react'
import Image from "next/image"
import tempPic from "../../../public/images/MI7.jpg"
const ComingSoonCard = () => {
  return (
    <div className="w-[95vw] flex justify-evenly items-center">
        <div className="flex flex-col items-center">
            <p>10</p>
            <p>June</p>
        </div>
        <div className="w-[100px] h-[120px]">
            <Image src={tempPic} className="object-cover rounded-xl w-full h-full" />
        </div>
        <div className="">
            <p>Openhimer</p>
        </div>
    </div>
  )
}

export default ComingSoonCard