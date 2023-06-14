import React from 'react'
import NTTop from "./components/NTTop"
import NTBottom from "./components/NTBottom"

const NewTrailerCard = ({trailer}) => {
  return (
    <div className="h-[250px] flex flex-col">
        <NTTop ytId={trailer.ytid} name={trailer.title} />
        <NTBottom name={trailer.title}/>
    </div>
  )
}

export default NewTrailerCard