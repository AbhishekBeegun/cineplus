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
    },
    {
      name:"opemhimer3",
      date:"Sep"
  },
  {
    name:"opemhimer3",
    date:"Sep"
},]

  return (
    <div className="flex flex-col gap-5 py-2 px-2">

     <p className="text-xl font-semibold py-2 lg:px-36">Coming Soon <IoArrowForward/></p>
       <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center">

        {
            CSLIST.map( movie => (
                <ComingSoonCard/>
            ))
        }
      </div>
    </div>
  )
}

export default ComingSoon