import { Inter } from 'next/font/google'
import FeaturedMovies from "@/components/Homepage/FeaturedMovies"
import NowPlaying from "@/components/Homepage/NowPlaying"
import ComingSoon from "@/components/Homepage/ComingSoon"
import NewTrailers from "@/components/Homepage/NewTrailers"
import LatestNews from "@/components/Homepage/LatestNews"
import ImaxBanner from "@/components/Banner/ImaxBanner"

import { getFeaturedMovies } from "@/lib/client"
import { getPlayingInCinema } from "@/lib/client"
import { getTrailers } from "@/lib/client"
const inter = Inter({ subsets: ['latin'] })

export default function Home({FML,PC,TRL}) {

  return (
  <>
  
  <FeaturedMovies FML={FML}/>

  <NowPlaying PC={PC}/>

  <ImaxBanner/>

  <ComingSoon/>

  <NewTrailers TRL={TRL}/>

  <LatestNews/>

  </>
  )
}

export const getStaticProps = async () => {

  const res = await getFeaturedMovies()
  const FML = await res

  const res1 = await getPlayingInCinema()
  const PC = await res1 


  const res2 = await getTrailers()
  const TRL = await res2 



  return { props: { FML ,PC, TRL} }

}
