import React from 'react'
import { useState } from "react"
import { IoClose,IoSearch } from "react-icons/io5"
const SearchBar = () => {
  const [ShowSearch, setShowSearch] = useState(false)
  

  const ToggleSearch = () => {
    setShowSearch(!ShowSearch)
  }
  return (
    <>
    {!ShowSearch ? 
    <button
    className="text-xl"
    onClick={() => ToggleSearch()}>
      <IoSearch />
    </button>
    :
    <div className="fixed top-0 w-[100vw] h-20 z-10 bg-black text-white">
      <button onClick={() => ToggleSearch()}>
        <IoClose />
      </button>
    </div>
    }
    </>
  )
}

export default SearchBar