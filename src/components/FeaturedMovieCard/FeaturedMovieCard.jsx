import React from 'react'
import FMCTop from "./components/FMCTop"
import FMCBottom from "./components/FMCBottom"
import IDBMsml from "../IDBM/IDBMsml"
import { useRouter } from "next/router"
import Link from "next/link"

const FeaturedMovieCard = ({Movie}) => {

  const router = useRouter()
  

  const handleClick = (slug) => {
    router.push(`movie-details/${slug}`)  
  }
  return (
    <div onClick={() => handleClick(Movie.name)}
    className="h-[250px] rounded-xl relative">
    <IDBMsml/>
    <FMCTop logo={Movie.Logo} bgposter={Movie.bgPoster}/>
    <FMCBottom name={Movie.name}/>
    </div>

  )
}

export default FeaturedMovieCard