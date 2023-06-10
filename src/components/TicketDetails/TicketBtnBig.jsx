import Link from "next/link"
import React from 'react'
import {IoTicketOutline} from "react-icons/io5"
const TicketBtnBig = () => {
  return (
    <>
    <Link href={"to ticket details"}>
    <button className="flex justify-center items-center gap-1 px-4 py-1 font-semibold text-red-100 rounded-full bg-gradient-to-r from-red-600 to-red-400">
    <IoTicketOutline /> 
    Tickets
    </button>        
        
    </Link>
    </>
  )
}

export default TicketBtnBig