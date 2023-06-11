import React, { useEffect } from 'react'
import { useState } from "react"

const MovieRatings = ({data}) => {

  const [bgColor, setbgColor] = useState()
  const [Rating, setRating] = useState(data.imdbRating)
  const CheckRatings = () => {
    if(Rating <= 49){
      setbgColor("tomato")
    } else if(Rating >= 50 && Rating <= 69){
      setbgColor("gold")
    } else if(Rating >= 70 && Rating <= 100){
      setbgColor("limegreen")
    } else {
      setbgColor("gray")
    }
  }

  useEffect(() => {
    CheckRatings()
  },[])
  return (
    <div className="px-2">
      <p className="text-xl font-semibold">Movie Rating</p>

      <div
      style={{
        backgroundColor : `${bgColor}`
      }}
      className="h-[200px] rounded-xl text-white w-full flex items-center justify-center">
        <p className="text-5xl font-bold">{Rating}</p>        
      </div>
    </div>
  )
}

export default MovieRatings