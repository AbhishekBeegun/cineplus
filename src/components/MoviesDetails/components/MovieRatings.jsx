import React from 'react'

const MovieRatings = ({data}) => {
  return (
    <div className="px-2">
      <p className="text-xl font-semibold">Movie Rating</p>

      <div className="h-[200px] w-full bg-gray-200 flex items-center justify-center">
        <p className="text-5xl font-bold">{data.imdbRating}</p>        
      </div>
    </div>
  )
}

export default MovieRatings