import React from 'react'
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';
import {IoArrowForward} from "react-icons/io5"
import NewTrailerCard from "../NewTrailers/NewTrailerCard";

const NewTrailers = ({TRL}) => {

  return (
    <>
          <div className="px-2 py-2 lg:px-36">

              <p className="text-xl font-semibold py-2">New Trailers <IoArrowForward /></p>
              <Swiper
                  spaceBetween={5}
                  slidesPerView={1}

                  breakpoints={{
                      // when window width is >= 768px
                      768: {
                          width: 768,
                          slidesPerView: 2,
                      },
                  }}
              >
                  {TRL && TRL.map((trailer) => {
                      return (
                          <div key={trailer.slug}>
                              <SwiperSlide>
                                  <NewTrailerCard trailer={trailer} />
                              </SwiperSlide>
                          </div>
                      )
                  }
                  )}
              </Swiper>


          </div>


      </>
  )
}

export default NewTrailers