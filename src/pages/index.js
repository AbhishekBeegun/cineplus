import { Inter } from 'next/font/google'
import FeaturedMovies from "@/components/Homepage/FeaturedMovies"
import NowPlaying from "@/components/Homepage/NowPlaying"
import ComingSoon from "@/components/Homepage/ComingSoon"
import NewTrailers from "@/components/Homepage/NewTrailers"
import LatestNews from "@/components/Homepage/LatestNews"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  
  <FeaturedMovies/>

  <NowPlaying/>

  <ComingSoon/>

  <NewTrailers/>

  <LatestNews/>

  </>
  )
}
