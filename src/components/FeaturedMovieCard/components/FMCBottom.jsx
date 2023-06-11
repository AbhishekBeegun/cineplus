import React from 'react'

const FMCBottom = ({name}) => {
  return (
    <div className="w-full h-[50px] rounded-b-xl p-2 text-sm font-semibold">
        {/* title + year + first categorie */}
        <p>{name}</p>

        <div className="flex items-center gap-2">
          <p>2023</p>
          <p>Comedy</p>
        </div>
    </div>
  )
}

export default FMCBottom