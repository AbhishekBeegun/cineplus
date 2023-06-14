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
    <div 
    onClick={() => handleClick(Movie.title)}
    className="h-[250px] lg:h-[550px] cursor-pointer rounded-xl relative">
    <IDBMsml/>
    <FMCTop logo={Movie.logoImage} bgposter={Movie.mainImage}/>
    <FMCBottom name={Movie.title} genre={Movie.genre}/>
    </div>

  )
}

export default FeaturedMovieCard