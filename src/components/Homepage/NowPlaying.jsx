import React from 'react'
import MovieCard from "../MovieCard/MovieCard"
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';
import {IoArrowForward} from "react-icons/io5"


const NowPlaying = ({PC}) => {


  return (
    <div className="px-2 py-2 lg:px-36">

        <p className="text-xl font-semibold py-2">Now Playing in Cinema <IoArrowForward/></p>
        <Swiper
        spaceBetween={2}
        slidesPerView={2.2}
        loop
        breakpoints={{
          // when window width is >= 768px
          
          
          768: {
            width: 768,
            slidesPerView:2.5,
          },
        }}
      >
  {PC && PC.map( (Movie) => {
    return(
       <div key={Movie.slug}>
      <SwiperSlide>

       <MovieCard Movie={Movie}/>

      </SwiperSlide>
       </div>
    )}
  )}
      </Swiper>
  

    </div>
  )
}

export default NowPlaying