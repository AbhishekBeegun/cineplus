import Link from "next/link"
import React from 'react'
import {IoPlay} from "react-icons/io5"
const FixedMenu = () => {

  return (
    <div className="flex justify-evenly items-center">
      <Link href={"UpgradePremium"}>
        <button className="px-4 text-white font-semibold py-1 rounded-full bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
          Try Premium
        </button>
      </Link>

      <Link href={"freemovies"}>
      <button className="flex items-center gap-1 px-4 font-semibold py-1 rounded-full border border-black">
        <IoPlay />
        Free movies        
      </button>
      </Link>
    </div>
  )
}

export default FixedMenu