import React, { Component } from 'react'
import MaterialsService from '../../../service/MaterialsService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class MaterialForm extends Component {
    constructor() {
        super()
        this.state = {
            author: '',
            theater_play: '',
            genre: '',
            description: '',
            imageUrl: '',
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
            .then(() => this.props.closeModal())
            .catch(err => console.log(err))
    }

        // en este formulario, habrá que añadir, editar, eliminar, formulario reutilizable!


    render() {
        return (

            <>
                <hr></hr>
                <h5>Nuevo Tema</h5>
                <hr></hr>

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
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.imageUrl} name="imageUrl" type="text" />
                        <Form.Text className="text-muted"> Añade una Imagen</Form.Text>
                    </Form.Group>
                    <Button variant="warning" type="submit">Añadir</Button>
                </Form>

           </>
        )
    }
}
                
export default MaterialForm










// Obra < input onChange = { this.handleInputChange } value = { this.state.theater_play } name = "theater_play" type = "text" />
//     Autor < input onChange = { this.handleInputChange } value = { this.state.author } name = "author" type = "text" />
//         Género < input onChange = { this.handleInputChange } value = { this.state.genre } name = "genre" type = "text" />
//             Descripción < input onChange = { this.handleInputChange } value = { this.state.description } name = "description" type = "text" />
//                 Añadir Ítem < input onChange = { this.handleInputChange } value = { this.state.imageURL } name = "imageURL" type = "text" />
//                     <input type="submit" value="Enviar" />