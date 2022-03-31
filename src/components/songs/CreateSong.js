import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createSong } from '../../api/songs'
import { useNavigate } from 'react-router-dom'
import SongForm from './SongForm'

const CreateSong = (props) => {
    const navigate = useNavigate()
    // const {user, msgAlert} = props
    // console.log('user in create', user)
    const [song, setSong] = useState({title: '', album: '', lyrics: '', musicians: '', released: ''})
    console.log('song in create', song)
    const handleChange = (e) => {
        // e === event
        e.persist()

        setSong(prevSong => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            // console.log('this is e.target checked', e.target.checked)
            // if(name === "adoptable" && e.target.checked){
            //     value = true
            // } else if (name === "adoptable" && !e.target.checked){
            //     value = false
            // }
            if(name === 'musicians'){
                value = e.target.value.split(',')
            }

            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }

            const updatedValue = { [name]: value }

            console.log('prevSong', prevSong)
            console.log('updatedValue', updatedValue)

            return {...prevSong, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createSong(song)
            .then(res => {
                navigate(`/songs/${res.data.song._id}`)
            })
            // .then(()=>{
            //     msgAlert({
			// 		heading: 'Pet Added! Success!',
			// 		message: createPetSuccess,
			// 		variant: 'success',
			// 	})
            // })
            .catch(console.error)
    }

    return (
        <>
            <SongForm song={song} handleChange={handleChange} handleSubmit={handleSubmit}/> 
        </>
        // <Container className="justify-content-center">
        // <Form onSubmit={handleSubmit}>
        //     <Form.Label>Title</Form.Label>
        //     <Form.Control 
        //         placeholder="what is the song title?"
        //         value={song.title}
        //         name='title'
        //         onChange={handleChange}
        //     />
        //     <Form.Label>Album</Form.Label>
        //     <Form.Control 
        //         placeholder="what album is the song from?"
        //         value={song.album}
        //         name='album'
        //         onChange={handleChange}
        //     />
        //     <Form.Label>Lyrics</Form.Label>
        //     <Form.Control 
        //         placeholder="what are the lyrics?"
        //         value={song.lyrics}
        //         name='lyrics'
        //         onChange={handleChange}
        //     />
        //     <Form.Label>Musicians</Form.Label>
        //     <Form.Control 
        //         placeholder="which cats played on the track?"
        //         value={song.musicians}
        //         name='musicians'
        //         onChange={handleChange}
        //     />
        //     <Form.Label>Release Date</Form.Label>
        //     <Form.Control 
        //         placeholder="when did this joint come out?"
        //         value={song.released}
        //         name='released'
        //         type="date"
        //         onChange={handleChange}
        //     />
        //     <Button type='submit'>Submit</Button>
        // </Form>
        // </Container>
    )
}

export default CreateSong