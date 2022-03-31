import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { showSong } from '../../api/songs'
import { removeSong } from '../../api/songs'
import { updateSong } from '../../api/songs'
import { useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import EditSongModal from './EditSongModal'

const ShowSong = (props) => {
    const [song, setSong] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
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

    let players
    if(song){
        players = song.musicians.map((musician, index)=> {
            return <li key={index}>{musician}</li>
        })

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
            <h4>Lyrics:</h4> <br/>
            <p>{song.lyrics}</p>
            <h4>Musicians: </h4>
            <ul>
                {players}
            </ul>
            <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                Edit Song
            </Button>
            <Button className="m-2" variant="danger" onClick={removeTheSong}>
                Delete Song
            </Button>
            <EditSongModal 
                song={song}
                show={modalOpen}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateSong={updateSong}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}

export default ShowSong