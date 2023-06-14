import React from 'react'
import IDBMsml from "@/components/IDBM/IDBMsml"
import TicketBtnSml from "@/components/TicketDetails/TicketBtnSml"
import { urlFor } from "@/lib/client"


const MCTop = ({Poster}) => {
  return (
    <div className="h-[210px] lg:h-[410px] w-full rounded-lg relative bg-black">
      <IDBMsml/>
     <img src={urlFor(Poster)} className="w-full h-full rounded-lg object-cover absolute opacity-70" />
     <TicketBtnSml/>
    </div>
  )
}

export default MCTop