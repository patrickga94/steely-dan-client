import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { showSong } from '../../api/songs'
import { removeSong } from '../../api/songs'
import { useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const ShowSong = (props) => {
    const [song, setSong] = useState(null)
    const { songId } = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        console.log('this is songId', songId)
        showSong(songId)
            .then(song =>{
                setSong(song.data.song)
            })
            .catch(error => console.error)
    }, [])
    console.log('this is song', song)
    const removeTheSong = () =>{
        removeSong(songId)
            .then(res =>{
                navigate('/')
            })
            .catch(console.error)
    }


    if(!song){
        return(
            <h1>loading...</h1>
        )
    }
    let songRelease = song.released.slice(0, -14)
    return (
        <>
            <h1>{song.title}</h1>
            <h3>Off of {song.album} released in {songRelease}</h3>
            <Button className="m-2" variant="danger" onClick={removeTheSong}>
                Delete Song
            </Button>
        </>
    )
}

export default ShowSong