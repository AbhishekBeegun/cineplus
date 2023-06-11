import React from 'react'

const MovieDesc = ({desc}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Description</h2>
      <p>{desc}</p>
    </div>
  )
}

export default MovieDesc