import React from 'react'
import {IoLogoTwitter,IoLogoYoutube,IoLogoFacebook} from "react-icons/io"
const Footer = () => {

  const footerlinks =["Privacy","Movies","News","Trailers","Favorite","Support","Premium"]
  return (
    <footer className="flex flex-col items-center text-white bg-[#181818]">
      <div className="flex items-center gap-20 py-10 text-xl">
        <IoLogoTwitter/>
        <IoLogoYoutube/>
        <IoLogoFacebook/>
      </div>

      <div className="flex flex-col">
        {footerlinks.map(link => (
          <li className="py-2 text-center text-sm list-none">{link}</li>
        ))}

      </div>

      <div className="py-4 font-semibold">
        <p>2023Ⓒ Abhishek Beegun</p>
      </div>


    </footer>
  )
}

export default Footer