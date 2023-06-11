import React from 'react'
import MCTop from "./components/MCTop"
import MCBottom from "./components/MCBottom"
import IDBMsml from "../IDBM/IDBMsml"



const MovieCard = () => {
  return (
    <div className="h-[250px] rounded-lg relative">
        <MCTop/>
        <MCBottom/>    
    </div>
  )
}

export default MovieCard