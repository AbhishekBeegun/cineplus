import React from 'react'
import Image from "next/image"
import tempPic from "../../../public/images/MI7.jpg"
const ComingSoonCard = () => {
  return (
    <div className="w-[300px] flex justify-between px-2 py-2 items-center border-y border-gray-400">
        <div className="flex flex-col items-center">
            <p className="text-red-500 font-semibold text-xl">10</p>
            <p>June</p>
        </div>
        <div className="">
            <p>Openhimer</p>
        </div>
        <div className="w-[100px] h-[120px]">
            <Image src={tempPic} className="object-cover rounded-xl w-full h-full" />
        </div>
    </div>
  )
}

export default ComingSoonCard