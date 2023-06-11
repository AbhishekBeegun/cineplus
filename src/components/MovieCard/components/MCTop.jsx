import React from 'react'
import Image from "next/image"
import temppic from "../../../../public/images/openhimer.jpg"
import IDBMsml from "@/components/IDBM/IDBMsml"
import TicketBtnSml from "@/components/TicketDetails/TicketBtnSml"

const MCTop = () => {
  return (
    <div className="h-[210px] lg:h-[410px] w-full rounded-lg relative bg-black">
      <IDBMsml/>
     <Image src={temppic} className="w-full h-full rounded-lg object-cover absolute opacity-70" />
     <TicketBtnSml/>
    </div>
  )
}

export default MCTop