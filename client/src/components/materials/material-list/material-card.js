// import React, { Component } from 'react'
// import MaterialsService from '../../../service/MaterialsService'



// import Form from 'react-bootstrap/Form'
// //import Button from 'react-bootstrap/Button'
// //import Modal from 'react-bootstrap/Modal'

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
//             .then(response => console.log(response))//response.data)
//             .catch(err => console.log(err))
//     }

//     handleModalShow = () => this.setState({ showModal: true })
//     handleModalClose = () => this.setState({ showModal: false })

//     render() {

//         return (


//             <Container as="main" className="profile-page" >

//                 {
//                     <h5>Estos son nuestro temas comunes, pero siempre podrás añadir otro...</h5>
//                 }

//                 <Form>
//                     Comedia <input onChange={this.handleInputChange} value={this.state.title} name="title" type="text" /> <br></br>
//                         Breve introduccion<input onChange={this.handleInputChange} value={this.state.description} name="description" type="text" /> <br></br>
//                         img <input onChange={this.handleInputChange} value={this.state.imageUlr} name="imageURL" type="text" /> <br></br>
//                     <input type="submit" value="Enviar" />
//                 </Form> 

//             </Container>
//         )
//     }
// }


// export default MaterialForm





import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const MaterialCard = ({ title, imageUrl }) => {


    return (
        <Col md={4}>
            <Card className="material-card">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Link to={'/materials'} className="btn btn-info btn-block btn-sm">Abrir</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default MaterialCard


