import React from 'react'
import FeaturedMovieCard from "../FeaturedMovieCard/FeaturedMovieCard";
import {Swiper, SwiperSlide}  from 'swiper/react'
import { Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/autoplay";

import {IoArrowForward} from "react-icons/io5"

const FeaturedMovies = ({FML}) => {


  return (
    <div className="px-2 py-4 lg:px-36">

        <p className="text-xl font-semibold py-2">Featured Movies <IoArrowForward/></p>
        <Swiper
        modules={[Autoplay]}
        autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
           }}
      loop
        spaceBetween={10}
        slidesPerView={1}
  
        breakpoints={{
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 0.5,
          },
        }}
      >
  {FML && FML.map( (Movie) => {
    return(
       <div key={Movie.slug}>
      <SwiperSlide>
       <FeaturedMovieCard Movie={Movie}/>
      </SwiperSlide>
       </div>
    )}
  )}
      </Swiper>
  

    </div>
  )
}

export default FeaturedMovies