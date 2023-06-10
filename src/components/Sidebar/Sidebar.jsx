import React from 'react'
import {IoMenu,IoClose} from "react-icons/io5"

const Sidebar = ({OpenSidebar,setOpenSidebar}) => {

  const ToggleSidebar = () =>  {
    setOpenSidebar(!OpenSidebar)        
  }
  return (
    <>
    {
      !OpenSidebar ?
      <button className="text-xl" 
      onClick={() => ToggleSidebar() }>
        <IoMenu />
      </button> 

      :

      <div>
        <button onClick={() => ToggleSidebar()}>
          <IoClose />
        </button>
      </div>
    }
    </>
  )
}

export default Sidebar