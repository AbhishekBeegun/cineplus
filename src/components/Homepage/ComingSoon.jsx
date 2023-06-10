import React from 'react'
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';
import {IoArrowForward} from "react-icons/io5"
import ComingSoonCard from "../ComingSoonMovies/ComingSoonCard";

const ComingSoon = () => {

    const CSLIST = [{
        name:"opemhimer",
        date:"June"
    },
    {
        name:"opemhimer2",
        date:"July"
    },
    {
        name:"opemhimer3",
        date:"Sep"
    },
    {
        name:"opemhimer4",
        date:"Dec"
    }]

  return (
    <div className="flex flex-col gap-5 py-2 px-2">

     <p className="text-xl font-semibold py-2">Coming Soon <IoArrowForward/></p>

        {
            CSLIST.map( movie => (
                <ComingSoonCard/>
            ))
        }
    </div>
  )
}

export default ComingSoon