import Link from "next/link"
import React from 'react'
import {MdOutlineLocalMovies} from "react-icons/md"
const TicketBtnSml = () => {
  return (
    <Link href={"to tickets"} className=" py-1 px-2 text-xs text-white font-semibold bg-red-500 rounded-sm absolute bottom-2 right-2">
      <button className="flex gap-2 items-center justify-center w-full">
        <MdOutlineLocalMovies />
        Tickets
      </button>    
    </Link>
  )
}

export default TicketBtnSml