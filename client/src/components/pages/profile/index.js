import React, { Component } from 'react'
import CoasterService from '../../../service/CoasterService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class ProfileForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            surname: '',
            description: '',
            theater_play: '',
            author: '',
            genre: '',
            favourite:'',
            my_courses: '',
            role: '',
            ad_item: '',
            showModal: false
        }
        this.coasterService = new CoasterService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {
        e.preventDefault()
        this.CoasterService
            .createCoaster(this.state)
            .then(response => response.data)
            .catch(err => console.log(err))
    }

    handleModalShow = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })
    
    render() {
        
        return (
            <>
                <h1>Este es tu escenario</h1>
            
                <Form onSubmit={this.handleFormSubmit}>
                    
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.surname} name="surname" type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Breve Descripción</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                    <Form.Text className="text-muted"> Añade una breve descripción sobre ti</Form.Text>
                    </Form.Group>
                </Form>

                {
                    this.props.loggedInUser && <Button onClick={this.handleModalShow} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Crear nuevo item</Button>
                }

                <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                    

                <Modal.Body>
                <Form onSubmit={this.handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Obra</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.theater_play} name="theater_play" type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Autor</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.author} name="author" type="text" />                    
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Género</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.genre} name="genre" type="text" />
                    <Form.Text className="text-muted"> Comedia, tragedia, mímica...</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Breve Descripción</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Añadir Ítem</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.ad_item} name="ad_item" type="text" />                        
                    <Form.Text className="text-muted"> Añade un video, una foto, una noticia...</Form.Text>
                </Form.Group>
                  
                <Button variant="dark" type="submit">Enviar</Button>           
                 
                </Form>
                </Modal.Body>
                </Modal>
           </>
 
        )
            
    }
}

export default ProfileForm

