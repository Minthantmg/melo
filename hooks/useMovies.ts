import { useQuery } from "@tanstack/react-query";
import {getMoviesList} from "../apis/movie";

const getMoviesListHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
        queryKey: ["get", "movies"],
        queryFn: getMoviesList,
    });
};

export const useMovies = () =>{
    return{
        getMoviesListHook
    }
}