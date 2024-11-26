'use client'
import React from 'react';
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {demo_movies} from "@/type";
import {Separator} from "@/components/ui/separator";
import {useMovies} from "../../../hooks/useMovies";

const Movies = () => {
    const {getMoviesListHook} = useMovies()
    const {data: moviesData} = getMoviesListHook()

    console.log(moviesData)
    return (
        <div>
            <div className='mt-8 font-bold text-2xl'>
                Currently Trending
            </div>
            <div>
                <Carousel className="mt-10">
                    <CarouselContent>
                        {demo_movies.map((movie, index) => (
                            <CarouselItem key={index} className='md:basis-1/6 basis-1/2'>
                                <div className='md:h-52 rounded-3xl bg-gray-300'>
                                </div>
                                <div className='mt-4 text-md'>
                                    {movie.name}
                                </div>
                                <div className="flex h-5 items-center space-x-2 text-sm mt-2 mb-4">
                                    <div>
                                        {movie.rating}
                                    </div>
                                    <Separator orientation="vertical"/>
                                    <div>
                                        {movie.releaseDate}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};

export default Movies;