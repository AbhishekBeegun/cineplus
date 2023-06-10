import React from 'react'
import {IoLogoTwitter,IoLogoYoutube,IoLogoFacebook} from "react-icons/io"
const Footer = () => {

  const footerlinks =["Privacy","Movies","News","Trailers","Favorite","Support","Premium"]
  return (
    <footer className="flex flex-col items-center">
      <div className="flex items-center gap-20 py-2 text-xl">
        <IoLogoTwitter/>
        <IoLogoYoutube/>
        <IoLogoFacebook/>
      </div>

      <div className="flex flex-col">
        {footerlinks.map(link => (
          <li className="py-2 text-center list-none">{link}</li>
        ))}

      </div>

      <div className="py-4">
        <p>2023 Abhishek Beegun</p>
      </div>


    </footer>
  )
}

export default Footer