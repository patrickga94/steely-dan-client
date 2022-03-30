import React, {useState, useEffect} from 'react'
import { getAllSongs } from '../../api/songs'

const IndexSongs = (props) => {
    const [songs, setSongs] = useState(null)

    useEffect(()=>{
        getAllSongs()
            .then(res => {
                setSongs(res.data.songs)
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
        songsJsx = songs.map(song => (
            <li key={song.id}>
                {song.title}
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