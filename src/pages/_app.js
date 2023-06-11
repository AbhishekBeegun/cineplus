import '@/styles/globals.css'
import NavbarMobile from "@/components/Navbar/NavbarMobile"
import FixedMenu from "@/components/Navbar/FixedMenu"
import Footer from "@/components/BasicLayout/Footer"
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* navbar */}
      <div className="bg-[#181818] text-white">
        <NavbarMobile />
        <FixedMenu />
      </div>
      <Component {...pageProps} />

      <Footer/>
    </>
    ) 
}
