import React, {useState, useEffect} from 'react'
import { getAllSongs } from '../../api/songs'
import { Link } from 'react-router-dom'

const IndexSongs = (props) => {
    const [songs, setSongs] = useState(null)

    useEffect(()=>{
        getAllSongs()
            .then(res => {
                setSongs(res.data.songs)
                // console.log('these are the songs', songs)
            })
            .catch(console.error)
    }, [])
    if (!songs) {
        return <p>loading...</p>
    } else if (songs.length === 0) {
        return <p>no songs yet, go add some</p>
    }

    let songsJsx

    if (songs.length > 0) {
        console.log('this is songs ', songs)
        songsJsx = songs.map(song => (
            <li key={song._id}>
                <Link to={`/songs/${song._id}`}> {song.title} </Link> 
            </li>
        ))
    }

    return (
        <>
            <h3>All the songs</h3>
            <ul>
                {songsJsx}
            </ul>
        </>
    )
}

export default IndexSongs