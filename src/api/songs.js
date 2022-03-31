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

//create function
export const createSong = (newSong) => {
    // console.log('user', user)
    console.log('this is newSong', newSong)
    return axios({
        url: `${apiUrl}/songs`,
        method: 'POST',
        headers: {
            // Authorization: `Token token=${user.token}`
        },
        data: { song: newSong }
    })
}
