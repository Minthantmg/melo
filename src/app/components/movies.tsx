'use client'
import React from 'react';
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {Separator} from "@/components/ui/separator";
import {useMovies} from "../../../hooks/useMovies";
import Link from "next/link";

interface Comment {
    "username": string,
    "commentText": string,
    "rating": number,
    "createdAt": string,
    "_id": string
}

interface Movie {
    "_id": string,
    "title": string,
    "description": string,
    "releaseDate": string,
    "genre":string[],
    "rating": number,
    "director": string,
    "cast": string[],
    "duration": number,
    "createdAt": string,
    "__v": number,
    "comments": Comment[]
}

const Movies = () => {
    const {getMoviesListHook} = useMovies()
    const {data: moviesData,isLoading,isSuccess,isError} = getMoviesListHook()
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(moviesData?.releaseDate);

    return (
        <div>
            <div className='mt-8 font-bold text-2xl'>
                Currently Trending
            </div>
            {isLoading && (<>Loading...</>)}
            {isError && (<>Error...</>)}
            {isSuccess && (
                <>
                    <Carousel className="mt-10">
                        <CarouselContent>
                            {moviesData.map((movie: Movie, index: number) => (
                                <CarouselItem  key={index} className='lg:basis-1/6 basis-1/2'>
                                    <Link legacyBehavior={true} href={`/detail/${movie._id}`}>
                                        <a>
                                            <div className='h-52 rounded-3xl bg-gray-300'>
                                            </div>
                                            <div className='mt-4 text-md select-none'>
                                                            {movie.title}
                                            </div>
                                            <div className="flex h-5 items-center space-x-2 text-sm mt-2 mb-4 select-none">
                                                <div>
                                                    {movie.rating}
                                                </div>
                                                <Separator orientation="vertical"/>
                                                <div className='select-none'>
                                                    {formattedDate}
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </>
            )}
        </div>
    );
};

export default Movies;