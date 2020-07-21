
import React, { Component } from 'react'
import CoasterService from '../../../service/CoasterService'

import index from '../profile/index'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class ProfileForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
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
                <h1>Bienvenido </h1>
                {
                    this.props.loggedInUser && <Button onClick={this.handleModalShow} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Crear nuevo item</Button>
                }
                <Modal show={this.state.showModal} onHide={this.handleModalClose}>

            <Modal.Body>
            <Form onSubmit= {this.handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Favoritos</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.favourite} name="favourite" type="text"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Mis Cursos</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.my_courses} name="my_courses" type="text" />
                    <Form.Text className="text-muted"> Cursos en los que estoy apuntado.</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Rol</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.role} name="role" type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Añadir Ítem</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.ad_item} name="ad_item" type="text"/>
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

