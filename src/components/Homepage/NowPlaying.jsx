import React from 'react'
import MovieCard from "../MovieCard/MovieCard"
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';
import {IoArrowForward} from "react-icons/io5"


const NowPlaying = () => {
    const NPLIST = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="px-2 py-2">

        <p className="text-xl font-semibold py-2">Now Playing in Cinema <IoArrowForward/></p>
        <Swiper
        spaceBetween={2}
        slidesPerView={2.2}
        loop
        breakpoints={{
          // when window width is >= 768px
          
          
          768: {
            width: 768,
            slidesPerView: 5,
          },
        }}
      >
  {NPLIST.map( (Movie) => {
    return(
       <div>
      <SwiperSlide>
       <MovieCard/>
      </SwiperSlide>
       </div>
    )}
  )}
      </Swiper>
  

    </div>
  )
}

export default NowPlaying