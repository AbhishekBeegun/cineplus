import React from 'react'
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';
import {IoArrowForward} from "react-icons/io5"
import NewTrailerCard from "../NewTrailers/NewTrailerCard";

const NewTrailers = () => {

    const NTList = [1,2,3,4,5]
  return (
    <>
          <div className="px-2 py-2">

              <p className="text-xl font-semibold py-2">New Trailers <IoArrowForward /></p>
              <Swiper
                  spaceBetween={5}
                  slidesPerView={1.2}

                  breakpoints={{
                      // when window width is >= 768px
                      768: {
                          width: 768,
                          slidesPerView: 2,
                      },
                  }}
              >
                  {NTList.map((Trailer) => {
                      return (
                          <div>
                              <SwiperSlide>
                                  <NewTrailerCard />
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