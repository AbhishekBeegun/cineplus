import React from 'react'
import {IoArrowForward} from "react-icons/io5"
import LatestNewsCard from "../LatestNews/LatestNewsCard"
const LatestNews = () => {

    const LSList = [1,2,3]
  return (
    <div className="px-2 py-2 lg:px-36">
    <p className="text-xl font-semibold py-2">Popular News <IoArrowForward/></p>    
    <div className="flex flex-col gap-2">

    {
        LSList.map(New => (
            <LatestNewsCard/>
        ))
    }
    </div>



    </div>
  )
}

export default LatestNews