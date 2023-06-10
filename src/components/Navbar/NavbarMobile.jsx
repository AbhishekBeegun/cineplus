import React from 'react'
import Image from "next/image"
import { useState } from "react"
import Sidebar from "../Sidebar/Sidebar"
import LOGO from "../../../public/images/CinePlusLogo.png"
import SearchBar from "../Search/SearchBar"

const NavbarMobile = () => {
  const [OpenSidebar, setOpenSidebar] = useState(false)

  return (
    <nav className="flex justify-evenly items-center h-20">
      
      <Sidebar OpenSidebar={OpenSidebar} setOpenSidebar={setOpenSidebar}/>

      <div className="">
        <Image className="w-28 h-full" src={LOGO} />        
      </div>

      <SearchBar/>

      
    </nav>
  )
}

export default NavbarMobile