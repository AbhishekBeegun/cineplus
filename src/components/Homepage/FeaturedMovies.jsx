import React from 'react'
import FeaturedMovieCard from "../FeaturedMovieCard/FeaturedMovieCard";
import {Swiper, SwiperSlide}  from 'swiper/react'
import { Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/autoplay";

import {IoArrowForward} from "react-icons/io5"

const FeaturedMovies = () => {


    const Fakelist = [
      {"name" : "Transformers : Rise of the Beast",
       "bgPoster" : "https://comic-cons.xyz/wp-content/uploads/Transformers-Rise-of-the-Beasts-maximals-autobots.jpg",
       "Logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Transformers_rise_of_thebeasts_logo_png_2022_by_andrewvm_delznf1-fullview.png/1200px-Transformers_rise_of_thebeasts_logo_png_2022_by_andrewvm_delznf1-fullview.png"
    },
    {"name" : "Fast X",
    "bgPoster" : "https://www.toutlecd.com/wp-content/uploads/2023/04/02-fx-dm-mobile-banner-1080x745-pl-f01-031323-64108e7aa3468-1.jpeg",
    "Logo" : "https://upload.wikimedia.org/wikipedia/commons/3/3d/Fast_X_logo.png"
    },
    {"name" : "Oppenheimer",
    "bgPoster" : "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/62d9628a731b7a1f46ea0a0f/1658416165295/first-movie-poster-for-christopher-nolans-oppenheimer.jpg?format=1500w",
    "Logo" : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/dfkr5oy-0b707a64-849b-4956-8736-a603fe3dfb62.png/v1/fill/w_1280,h_612/oppenheimer_logo_png_hd_2023_by_andrewvm_dfkr5oy-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEyIiwicGF0aCI6IlwvZlwvYTU4YTc3MTktMGRjZi00ZTBiLWI3YmItZDJiNzI1ZGJiYjhlXC9kZmtyNW95LTBiNzA3YTY0LTg0OWItNDk1Ni04NzM2LWE2MDNmZTNkZmI2Mi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.06v_HPg3iHKbZ5Fa1S0CXTxQ763-KROwfVKUKVXV56c"
    },
    ]

  return (
    <div className="px-2 py-4">

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
        slidesPerView={0.9}
  
        breakpoints={{
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
  {Fakelist.map( (Movie) => {
    return(
       <div>
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