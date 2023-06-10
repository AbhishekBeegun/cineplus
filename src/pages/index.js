import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavbarMobile from "@/components/Navbar/NavbarMobile"
import FixedMenu from "@/components/Navbar/FixedMenu"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>

  {/* navbar */}
  <div className="border-b border-red-500">
  <NavbarMobile/>
  <FixedMenu/>
  </div>


  </>
  )
}
