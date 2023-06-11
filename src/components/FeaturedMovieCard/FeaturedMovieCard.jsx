import React from 'react'
import FMCTop from "./components/FMCTop"
import FMCBottom from "./components/FMCBottom"
import IDBMsml from "../IDBM/IDBMsml"

const FeaturedMovieCard = ({Movie}) => {
  return (
    <div className="h-[250px] w-[350px] rounded-xl relative">
    <IDBMsml/>
    <FMCTop logo={Movie.Logo} bgposter={Movie.bgPoster}/>
    <FMCBottom name={Movie.name}/>
    </div>
  )
}

export default FeaturedMovieCard