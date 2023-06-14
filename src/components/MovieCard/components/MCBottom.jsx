import React from 'react'

const MCBottom = ({title,genre}) => {
  return (
    <div className="text-xs font-semibold py-2">
        <p>{title}</p>
        <div className="flex items-center gap-2">
            <p>2023</p>
            <p>{genre}</p>            
        </div>
    </div>
  )
}

export default MCBottom