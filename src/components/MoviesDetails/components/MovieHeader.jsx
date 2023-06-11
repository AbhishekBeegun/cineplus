import React from 'react'

const MovieHeader = ({data}) => {
  return (
    <div className="flex flex-col items-center py-2">
      {/* poster image */}
      <div className="w-[200px] h-auto">
        <img
        className="w-full h-full rounded-lg"
         src={data.Poster} />
      </div>

      <p className="text-2xl font-semibold uppercase py-2">{data.Title}</p>
      <div className="text-sm flex items-center gap-2">
        <p>  
        {data.Year}
        </p>
        <p>{data.Runtime}</p>
      </div>
    

      <p className="text-sm">{data.Director}</p>
      <p className="text-sm">{data.Actors}</p>
    </div>
  )
}

export default MovieHeader