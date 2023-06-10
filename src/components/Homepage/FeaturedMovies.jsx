import React from 'react'
import FeaturedMovieCard from "../FeaturedMovieCard/FeaturedMovieCard";
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';
import {IoArrowForward} from "react-icons/io5"

const FeaturedMovies = () => {
    const FMLIST = [1,2,3]

  return (
    <div className="px-2 py-2">

        <p className="text-xl font-semibold py-2">Featured Movies <IoArrowForward/></p>
        <Swiper
        spaceBetween={5}
        slidesPerView={0.8}
  
        breakpoints={{
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
  {FMLIST.map( (Movie) => {
    return(
       <div>
      <SwiperSlide>
       <FeaturedMovieCard/>
      </SwiperSlide>
       </div>
    )}
  )}
      </Swiper>
  

    </div>
  )
}

export default FeaturedMovies