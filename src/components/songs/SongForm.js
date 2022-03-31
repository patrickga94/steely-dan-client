import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import EditSongModal from './EditSongModal'

const SongForm = (props) => {
    const{song, handleSubmit, handleChange} = props

    return(
        <Container className="justify-content-center">
        <Form onSubmit={handleSubmit}>
            <Form.Label>Title</Form.Label>
            <Form.Control 
                placeholder="what is the song title?"
                value={song.title}
                name='title'
                onChange={handleChange}
            />
            <Form.Label>Album</Form.Label>
            <Form.Control 
                placeholder="what album is the song from?"
                value={song.album}
                name='album'
                onChange={handleChange}
            />
            <Form.Label>Lyrics</Form.Label>
            <Form.Control 
                placeholder="what are the lyrics?"
                value={song.lyrics}
                name='lyrics'
                onChange={handleChange}
            />
            <Form.Label>Musicians</Form.Label>
            <Form.Control 
                placeholder="which cats played on the track?"
                value={song.musicians}
                name='musicians'
                onChange={handleChange}
            />
            <Form.Label>Release Date</Form.Label>
            <Form.Control 
                placeholder="when did this joint come out?"
                value={song.released}
                name='released'
                type="date"
                onChange={handleChange}
            />
            <Button type='submit'>Submit</Button>
        </Form>
        </Container>
    )
}

export default SongForm