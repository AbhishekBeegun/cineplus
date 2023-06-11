import React from 'react'
import { useState } from "react"
import Image from "next/image"
import tempPic from "../../../public/images/MI7.jpg"
import { IoHeart, IoHeartCircle, IoHeartOutline } from "react-icons/io5"
const ComingSoonCard = () => {

  const [WishList, setWishList] = useState(false);

  const handleWishlist = () => {
    setWishList(!WishList)
  }
  return (
    <div className="w-[95vw] lg:w-[40vw] flex justify-between px-2 py-2 items-center border-y lg:border-y-0 lg:border-x border-gray-300">
        <div className="flex flex-col items-center">
            <p className="text-red-500 font-semibold text-2xl">10</p>
            <p className="text-sm">June</p>
        </div>

        <div className="flex items-center gap-2">
        <div className="w-[70px] h-[100px]">
            <Image src={tempPic} className="object-cover rounded-xl w-full h-full" />
        </div>
            <p>Openhimer</p>
        </div>

        <div className="text-xl text-red-500">
          {WishList ? 
          <button onClick={() => handleWishlist()}>
            <IoHeartOutline/>
          </button>
          : 
          <button onClick={() => handleWishlist()}>
            <IoHeart/>
          </button>
            }
        </div>
    </div>
  )
}

export default ComingSoonCard