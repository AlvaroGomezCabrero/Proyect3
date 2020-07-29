import React, { Component } from 'react'
import MaterialsService from '../../../service/MaterialsService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class MaterialForm extends Component {
    constructor() {
        super()
        this.state = {
            author: '',
            theater_play: '',
            genre: '',
            description: '',
            imageURL: '',
            ad_item: '',
        }
        this.materialsService = new MaterialsService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.materialsService
            .createMaterial(this.state)
            .then(() => this.props.handleMaterialSubmit())
            .catch(err => console.log(err))
    }

//en este formulario, habrá que añadir, editar, eliminar, formulario reutilizable!










    handleModalShow = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })

    render() {
        return (
           <>
                <h5>Nuevo Espacio</h5>
                <hr></hr>

                <Modal show={this.state.showModal} onHide={this.handleModalClose}>

                <Modal.Body>
                <Form onSubmit={this.handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Autor</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.author} name="author" type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Obra</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.theater_play} name="theater_play" type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Género</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.genre} name="genre" type="text" />                         
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Añadir Ítem</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.ad_item} name="ad_item" type="text" />
                    <Form.Text className="text-muted"> Añade un video, una noticia...</Form.Text>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.imageURL} name="imageURL" type="text" />
                    <Form.Text className="text-muted"> Añade una Imagen</Form.Text>
                </Form.Group>

                <Button variant="info" type="submit">Añadir</Button>
                </Form>
                </Modal.Body>
                </Modal>

           </>
        )
    }
}
                
export default MaterialForm
