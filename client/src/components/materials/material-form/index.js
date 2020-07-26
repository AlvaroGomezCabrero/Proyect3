import React, { Component } from 'react'
import MaterialService from '../../../service/MaterialService'


import './material-list.css'



class MaterialForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            imageURL: '',
            genre: '',
            
        }
        this.materialService = new MaterialService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.MaterialService
            .createContent(this.state)
            .then(response => response.data)
            .catch(err => console.log(err))
    }

    handleModalShow = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })

    render() {

        return (
            <>
                <Container as="main" className="profile-page" >

                    {
                        <h2>Aquí podrás crear un foro de debate sobre un tema que te interese,
                        podrás añadir contenido, información, vídeos...</h2>
                    }
                    <Form>
                        <Form.Label>Temas</Form.Label>
                        <Form.Control as="select">
                            <option>Comedia</option>
                            <option>Tragedia</option>
                            <option>Infantil</option>
                            <option>Mímica</option>
                        </Form.Control>

                        <Form.Label>Sobre Cursos</Form.Label>
                        <Form.Control as="select">
                            <option>Interpretación y dramatización</option>
                            <option>Gestual</option>
                            <option>Maquillaje y caracterización</option>
                        </Form.Control>

                        <hr></hr>
                         <Form.Group>
                            <Button onClick={this.handleModalShow} variant="info" size="sm" style={{ marginBottom: '20px' }} type="submit">Enviar</Button>
                        </Form.Group>
                    </Form> 

                    {/* EL USUARIO HA DE ESTAR LOGEADO PARA PODER DEBATIR */}
                    {/* {
                        this.props.loggedInUser && <Button onClick={this.handleModalShow} variant="info" size="sm" style={{ marginBottom: '20px' }}> Crear nuevo item</Button>
                    } */}
                </Container>

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


export default MaterialForm