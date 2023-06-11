import React from 'react'
import Image from "next/image"
const LatestNewsCard = () => {
  return (
    <div className="h-[200px] w-[95vw] lg:w-1/3 relative bg-black rounded-lg flex justify-center items-center">
    <img src="https://m.media-amazon.com/images/M/MV5BMTU0MWU5NTEtZDE4MS00NjcyLWIzNDgtYWFmYjkxNWViYTM5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
     className="absolute w-full h-full rounded-xl opacity-50"/>

     <div className="text-white text-center z-10">
        <p className="text-lg py-1">Spider Man : Into the SpiderVerse</p>
        <p className="text-sm">Descriptions</p>
     </div>


    </div>
  )
}

export default LatestNewsCard