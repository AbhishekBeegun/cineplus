import { createClient } from "@sanity/client"
import imageUrlBuilder  from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset:'production',
    apiVersion:'2023-06-14',
    useCdn:true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export async function getFeaturedMovies() {
    const FML = await client.fetch('*[_type == "featuredmovies"]')
    return FML ;
} ;

export async function getPlayingInCinema() {
    const PC = await client.fetch('*[_type == "playingincinema"]')
    return PC ;
};

export async function getTrailers() {
    const TRL = await client.fetch('*[_type == "trailers"]')
    return TRL ;
};