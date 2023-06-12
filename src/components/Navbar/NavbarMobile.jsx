import React from 'react'
import Image from "next/image"
import { useState } from "react"
import Sidebar from "../Sidebar/Sidebar"
import LOGO from "../../../public/images/CinePlusLogosml.png"
import SearchBar from "../Search/SearchBar"
import Link from "next/link"

const NavbarMobile = () => {
  const [OpenSidebar, setOpenSidebar] = useState(false)

  return (
    <nav className="flex justify-between items-center py-2 px-4 ">
      
      <Sidebar OpenSidebar={OpenSidebar} setOpenSidebar={setOpenSidebar}/>

      <Link href={"/"} className="">
        <Image className="w-16 h-full" src={LOGO} />        
      </Link>

      <SearchBar/>

      
    </nav>
  )
}

export default NavbarMobile