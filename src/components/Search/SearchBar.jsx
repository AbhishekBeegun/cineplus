import React from 'react'
import { useState } from "react"
import { IoClose,IoSearch } from "react-icons/io5"
const SearchBar = () => {
  const [ShowSearch, setShowSearch] = useState(false)
  const [SearchInput, setSearchInput] = useState()

  const ToggleSearch = () => {
    setShowSearch(!ShowSearch)
  }
  return (
    <>
      {!ShowSearch ?
        <button
          className="text-2xl"
          onClick={() => ToggleSearch()}>
          <IoSearch />
        </button>
        :
        <div className="fixed flex top-0 w-[100vw] py-2 z-10 bg-black text-white">
          <button onClick={() => ToggleSearch()}>
            <IoClose />
          </button>
          
          <form className="">
            <input
             className="py-2 px-4 rounded"
              placeholder="Looking for . . ."
              onChange={(e) => setSearchInput(e.target.value)}
              value={SearchInput} />

              <button>Search</button>
          </form>
        </div>
      }
    </>
  )
}

export default SearchBar