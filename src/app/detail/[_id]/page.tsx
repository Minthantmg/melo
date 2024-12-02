'use client'
import React from 'react';
import {useParams} from "next/navigation";
import {useMovies} from "../../../../hooks/useMovies";

const Page = () => {
    const {_id} = useParams();
    const id = _id as string;
    const {getMovieByIdHook} = useMovies()
    const { data: movieData,isSuccess,isLoading,isError } = getMovieByIdHook(id);
    console.log(movieData)

    return (
        <>
            {isError && <>Error...</>}
            {isLoading && <>Loading...</>}
            {isSuccess && (
                <>
                    <div className='absolute h-[250px] w-full bg-gray-300'></div>
                    <div className='md:mx-60'>
                        <div className='relative pt-44'>
                            <div className='flex'>
                                <div className='h-52 bg-red-300 w-1/5'>
                                </div>
                                <div className='w-4/5'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <div>
                                                This is title
                                            </div>
                                            <div>
                                                this is star
                                            </div>
                                            <div>
                                                this is date box
                                            </div>
                                        </div>
                                        <div>
                                            this is button
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            this is synopsis
                                        </div>
                                        <div>
                                            this is detail
                                        </div>
                                        <div>
                                            this is director group
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