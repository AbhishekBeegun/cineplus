import React from 'react'
import { useRouter } from "next/router"
import MovieHeader from "@/components/MoviesDetails/components/MovieHeader"
import MovieDesc from "@/components/MoviesDetails/components/MovieDesc"
import PlayingLocation from "@/components/MoviesDetails/components/PlayingLocation"
import MovieRatings from "@/components/MoviesDetails/components/MovieRatings"
import MovieBoxOfficeDetails from "@/components/MoviesDetails/components/MovieBoxOfficeDetails"
const MDetails = () => {

    const router = useRouter()

    console.log(router.query.slug)

    const fakedata={"Title":"Oppenheimer","Year":"2023","Rated":"N/A","Released":"21 Jul 2023","Runtime":"180 min","Genre":"Biography, Drama, History","Director":"Christopher Nolan","Writer":"Christopher Nolan, Kai Bird, Martin Sherwin","Actors":"Cillian Murphy, Emily Blunt, Matt Damon","Plot":"The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.","Language":"English","Country":"United Kingdom, United States","Awards":"1 nomination","Poster":"https://m.media-amazon.com/images/M/MV5BMDEzNDdjYTctNjA4ZS00ZDgzLTkxNmUtMTQwMzUyMmFhMWRhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt15398776","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}
  
    return (
    <div>
        <MovieHeader
        data={fakedata}
        />
        <MovieRatings data={fakedata}/>
        <PlayingLocation/>
        <MovieBoxOfficeDetails/>
        <MovieDesc desc={fakedata.Plot}/>
    </div>
  )
}

export default MDetails