'use client'
import React from 'react';
import {useParams} from "next/navigation";
import {useMovies} from "../../../../hooks/useMovies";
import {CalendarDays,Tag,Clock} from 'lucide-react'

const Page = () => {
    const {_id} = useParams();
    const id = _id as string;
    const {getMovieByIdHook} = useMovies()
    const { data: movieData,isSuccess,isLoading,isError } = getMovieByIdHook(id);

    const formattedDate = movieData?.releaseDate
        ? new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }).format(new Date(movieData.releaseDate))
        : 'Unknown Date';

    return (
        <>
            {isError && <>Error...</>}
            {isLoading && <>Loading...</>}
            {isSuccess && (
                <>
                    <div className='absolute h-[250px] w-full bg-gray-300'></div>
                    <div className='md:mx-60 mx-4'>
                        <div className='relative pt-36 md:pt-44'>
                            <div className='flex'>
                                <div className='h-64 md:h-52 bg-red-300 w-1/3 md:w-1/5'>
                                </div>
                                <div className='w-2/3 md:w-4/5'>
                                    <div className='flex justify-between ml-4'>
                                        <div>
                                            <div className='text-xl font-sans font-bold'>
                                                {movieData.title}
                                            </div>
                                            <div className='md:flex md:mt-3'>
                                                <div className='flex text-xs mt-2 md:mt-1'>
                                                    <div>
                                                        <CalendarDays width={15} height={15}/>
                                                    </div>
                                                    <div className='flex justify-center items-center ml-1'>
                                                        {formattedDate}
                                                    </div>
                                                </div>
                                                <div className='flex text-xs mt-1 md:ml-4'>
                                                    <div>
                                                        <Tag width={15} height={15}/>
                                                    </div>
                                                    <div className='flex justify-center items-center ml-1'>
                                                        {movieData.genre}
                                                    </div>
                                                </div>
                                                <div className='flex text-xs mt-1 md:ml-4'>
                                                    <div>
                                                        <Clock width={15} height={15}/>
                                                    </div>
                                                    <div className='flex justify-center items-center ml-1'>
                                                        {movieData.duration} min
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            this is button
                                        </div>
                                    </div>
                                    <div className='mt-6 ml-4'>
                                    <div className='text-lg font-sans font-bold text-gray-500'>
                                            Synopsis
                                        </div>
                                        <div className='mt-4 text-sm line-clamp-3'>
                                            {movieData.description}
                                        </div>
                                        <div className='mt-3 text-sm'>
                                            {movieData.director}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Page;