import React from 'react'
import NTTop from "./components/NTTop"
import NTBottom from "./components/NTBottom"

const NewTrailerCard = () => {
  return (
    <div className="h-[300px] w-[80vw] border border-emerald-500">
        <NTTop />
        <NTBottom/>
    </div>
  )
}

export default NewTrailerCard