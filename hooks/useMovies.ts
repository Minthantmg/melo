import { useQuery } from "@tanstack/react-query";
import {getMovieById, getMoviesList} from "../apis/movie";

const getMoviesListHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
        queryKey: ["get", "movies"],
        queryFn: getMoviesList,
    });
};

const getMovieByIdHook = (_id:string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
        queryKey:["get","movie",_id],
        queryFn:()=> getMovieById(_id)
    })
}

export const useMovies = () =>{
    return{
        getMoviesListHook,
        getMovieByIdHook
    }
}