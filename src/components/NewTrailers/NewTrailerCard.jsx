import React from 'react'
import NTTop from "./components/NTTop"
import NTBottom from "./components/NTBottom"

const NewTrailerCard = ({trailer}) => {
  return (
    <div className="h-[250px] w-[95vw] flex flex-col">
        <NTTop ytId={trailer.ytId} name={trailer.name} />
        <NTBottom name={trailer.name}/>
    </div>
  )
}

export default NewTrailerCard