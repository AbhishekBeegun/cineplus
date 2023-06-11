import React from 'react'
import { useRouter } from "next/router"
import MCTop from "./components/MCTop"
import MCBottom from "./components/MCBottom"



const MovieCard = () => {

  const router = useRouter()

  const handleClick = (slug) => {
  router.push(`movie-details/op`)
  }
  return (
    <div 
    onClick={() => handleClick("")}
    className="h-[250px] lg:w-[250px] lg:h-[500px] rounded-lg relative">
        <MCTop/>
        <MCBottom/>    
    </div>
  )
}

export default MovieCard