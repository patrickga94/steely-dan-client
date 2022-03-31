import apiUrl from "../apiConfig";
import axios from "axios";

//index function
export const getAllSongs = () => {
    return axios(`${apiUrl}/songs`)
}

//show function
export const showSong = (songId) => {
    console.log('this is the api song id, ', songId)
    return axios(`${apiUrl}/songs/${songId}`)
}
