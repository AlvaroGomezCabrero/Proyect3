import React, { Component } from 'react'
import MaterialsService from '../../../service/MaterialsService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class MaterialForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            theater_play: '',
            author: '',
            imageURL: '',
            genre: '',
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

    render() {
        return (
           <>
                <h5>Nuevo Espacio</h5>
                <hr></hr>
                
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

                <Button variant="info" type="submit">Añadir</Button>
                </Form>

           </>
        )
    }
}

                
                
                
export default MaterialForm
