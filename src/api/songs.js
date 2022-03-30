import apiUrl from "../apiConfig";
import axios from "axios";

//index function
export const getAllSongs = () => {
    return axios(`${apiUrl}/songs`)
}