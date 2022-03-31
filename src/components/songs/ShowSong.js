import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { showSong } from '../../api/songs'

const ShowSong = (props) => {
    const [song, setSong] = useState(null)
    const { songId } = useParams()
    useEffect(()=>{
        console.log('this is songId', songId)
        showSong(songId)
            .then(song =>{
                setSong(song.data.song)
            })
            .catch(error => console.error)
    }, [])
    console.log('this is song', song)
    // console.log('this is song.title', song.title)
    if(!song){
        return(
            <h1>loading...</h1>
        )
    }
    return (
        <>
            <h1>{song.title}</h1>
            <h3>Off of {song.album} released in {song.released}</h3>
        </>
    )
}

export default ShowSong