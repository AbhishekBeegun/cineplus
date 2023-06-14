import React from 'react'
import { useRouter } from "next/router"
import MCTop from "./components/MCTop"
import MCBottom from "./components/MCBottom"



const MovieCard = ({Movie}) => {

  const router = useRouter()

  const handleClick = (slug) => {
  router.push(`movie-details/${slug}`)
  }
  return (
    <div 
    onClick={() => handleClick(Movie.title)}
    className="h-[250px] lg:w-[250px] lg:h-[500px] rounded-lg relative">
        <MCTop Poster={Movie.mainImage}/>
        <MCBottom title={Movie.title} genre={Movie.genre}/>    
    </div>
  )
}

export default MovieCard