// import React, { Component } from 'react'
// import MaterialsService from '../../../service/MaterialsService'


// import './material-form.css'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'

// import Container from 'react-bootstrap/Container'



// class MaterialForm extends Component {
//     constructor() {
//         super()
//         this.state = {
//             title: '',
//             description: '',
//             theater_play: '',
//             author: '',
//             imageURL: '',
//             genre: '',
//             ad_item: '',
//             showModal: false
            
//         }
//         this.materialsService = new MaterialsService()
//     }

//     handleInputChange = e => {
//         const { name, value } = e.target
//         this.setState({ [name]: value })
//     }

//     handleFormSubmit = e => {
//         e.preventDefault()
//         this.MaterialsService
//             .createMaterial(this.state)
//             .then(response =>  console.log(response))//response.data)
//             .catch(err => console.log(err))
//     }

//     handleModalShow = () => this.setState({ showModal: true })
//     handleModalClose = () => this.setState({ showModal: false })

//     render() {

//         return (

            
//                 <Container as="main" className="profile-page" >

//                     {
//                         <h5>Estos son nuestro temas comunes, pero siempre podrás añadir otro...</h5>
//                     }

//                     <Form>
//                         Comedia <input onChange={this.handleInputChange} value={this.state.title} name="title" type="text" /> <br></br>
//                         Breve introduccion<input onChange={this.handleInputChange}  value={this.state.description} name="description" type="text" /> <br></br>
//                         img <input onChange={this.handleInputChange} value={this.state.imageUlr} name="imageURL" type="text" /> <br></br>
//                     <input type="submit" value="Enviar" />
//                     </Form> 


                    {/* <Form>
                        Tragedia <input onChange={this.handleInputChange} value={this.state.title} name="title" type="text" /> <br></br>
                        Breve introduccion<input onChange={this.handleInputChange}  value={this.state.description} name="description" type="text" /> <br></br>
                        img <input onChange={this.handleInputChange}  value={this.state.imageUlr} name="imageURL" type="text" /> <br></br>
                    </Form> 


                    <Form>
                        Infantil <input onChange={this.handleInputChange} value={this.state.title} name="title" type="text" /> <br></br>
                        Breve introduccion<input onChange={this.handleInputChange}  value={this.state.description} name="description" type="text" /> <br></br>
                        img <input onChange={this.handleInputChange} value={this.state.imageUlr} name="imageURL" type="text" /> <br></br>
                    </Form> 


                    <Form>
                        Mímica <input onChange={this.handleInputChange} value={this.state.title} name="title" type="text" /> <br></br>
                        Breve introduccion<input onChange={this.handleInputChange}  value={this.state.description} name="description" type="text" /> <br></br>
//                         img <input onChange={this.handleInputChange}  value={this.state.imageUlr} name="imageURL" type="text" /> <br></br>
//                     </Form>  */}
            
//             </Container>
//         )
//     }
// }


// export default MaterialForm
            







{/* 
                    <Form>
                        <Form.Label>Temas</Form.Label>
                        <Form.Control as="select">
                            <option>--Ninguno--</option>
                            <option>Comedia</option>
                            <option>Tragedia</option>
                            <option>Infantil</option>
                            <option>Mímica</option>
                        </Form.Control>

                        <Form.Label>Sobre nuestros Cursos</Form.Label>
                        <Form.Control as="select">
                            <option>--Ninguno--</option>
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
                {/* </Container>

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
                </Modal> */} 
