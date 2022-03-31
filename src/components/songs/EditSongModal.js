import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import SongForm from './SongForm'

const EditSongModal = (props) => {
    const { show, handleClose, updateSong, triggerRefresh } = props
    const [song, setSong] = useState(props.song)

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

        updateSong(song)
            .then(()=> handleClose())
            .then(()=> triggerRefresh())
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
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <SongForm 
                    song={song}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </Modal.Body>
        </Modal>
    )
}
    
export default EditSongModal