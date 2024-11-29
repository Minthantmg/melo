import {axiosInstance} from "../utils/axiosInstance";

export const getMoviesList = async () => {
    try {
        const res = await axiosInstance.get('/movies');
        return res.data;
    }catch (error) {
        throw error;
    }
}

export const getMovieById = async (_id: string) => {
    try {
        const res = await axiosInstance.get(`/movie/${_id}` );
        return res.data;
    }catch (error) {
        throw error;
    }
}