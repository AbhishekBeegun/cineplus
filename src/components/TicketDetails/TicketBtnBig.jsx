import Link from "next/link"
import React from 'react'
import {IoTicketOutline} from "react-icons/io5"


const TicketBtnBig = () => {

  return (
    <>
    <Link href={"to ticket details"}>
    <button className="flex justify-center items-center gap-1 px-4 py-1 lg:px-10 lg:py-4 lg:text-3xl font-semibold
     text-white rounded-full bg-gradient-to-r from-orange-600 to-orange-400
     hover:scale-110 transition-all ease-in-out">
    <IoTicketOutline /> 
    Tickets
    </button>        
    </Link>
    </>
  )
}

export default TicketBtnBig