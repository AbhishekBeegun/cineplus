import React from 'react'
import FMCTop from "./components/FMCTop"
import FMCBottom from "./components/FMCBottom"
import IDBMsml from "../IDBM/IDBMsml"

const FeaturedMovieCard = () => {
  return (
    <div className="h-[250px] w-[95vw] rounded-xl relative border border-black">
    <IDBMsml/>
    <FMCTop/>
    <FMCBottom/>
    </div>
  )
}

export default FeaturedMovieCard