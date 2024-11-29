'use client'
import React from 'react';
import {useParams, useRouter} from "next/navigation";
import {MoveLeft} from 'lucide-react'
import {useMovies} from "../../../../hooks/useMovies";

const Page = () => {
    const router = useRouter();
    const {_id} = useParams();
    const id = _id as string;
    const {getMovieByIdHook} = useMovies()
    const { data: movieData,isSuccess,isLoading,isError } = getMovieByIdHook(id);
    console.log(movieData)

    const gotoHome = () => {
        router.push('/')
    }
    return (
        <>
            {isError && <>Error...</>}
            {isLoading && <>Loading...</>}
            {isSuccess && (
                <div className="mx-10">
                    <div className='mt-10 cursor-pointer' onClick={gotoHome}>
                        <MoveLeft/>
                    </div>
                    {movieData.title}
                </div>
            )}
        </>
    );
};

export default Page;