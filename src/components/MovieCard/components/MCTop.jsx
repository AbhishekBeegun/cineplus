import React from 'react'
import Image from "next/image"
import temppic from "../../../../public/images/openhimer.jpg"
import IDBMsml from "@/components/IDBM/IDBMsml"

const MCTop = () => {
  return (
    <div className="h-[250px] w-[150px] rounded-lg relative bg-black">
      <IDBMsml/>
     <Image src={temppic} className="w-full h-full rounded-lg object-cover absolute opacity-70" />
    </div>
  )
}

export default MCTop