import React from 'react'
import NTTop from "./components/NTTop"
import NTBottom from "./components/NTBottom"

const NewTrailerCard = ({trailer}) => {
  return (
    <div className="h-[200px] w-[300px]">
        <NTTop ytId={trailer.ytId} name={trailer.name} />
        <NTBottom name={trailer.name}/>
    </div>
  )
}

export default NewTrailerCard