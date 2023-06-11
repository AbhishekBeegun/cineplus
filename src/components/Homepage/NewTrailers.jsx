import React from 'react'
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';
import {IoArrowForward} from "react-icons/io5"
import NewTrailerCard from "../NewTrailers/NewTrailerCard";

const NewTrailers = () => {

    const NTList = [1,2,3,4,5]

    const FakeList = [
        {"name" : "The Witcher S3",
         "ytId":"SzS8Ao0H6Co"
        },
        {"name" : "Barbie",
        "ytId":"pBk4NYhWNMM"
       },
       {"name" : "Expandables 4",
       "ytId":"DhlaBO-SwVE"
      },
      {"name" : "Hidden Strike",
      "ytId":"qNyzyzbX0wo"
     },
     {"name" : "MI7",
     "ytId":"UHxUl8ZXItQ"
    },
    ]
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
                  {FakeList.map((trailer) => {
                      return (
                          <div>
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