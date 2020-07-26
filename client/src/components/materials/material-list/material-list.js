import React, { Component } from 'react'
import MaterialsService from '../../../service/MaterialsService'

import MaterialCard from './material-card'
import MaterialForm from './../material-form'

import './material-list.css'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class MaterialList extends Component {
    constructor() {
        super()
        this.state = {
            materials: [] 

        }
        this.materialService = new MaterialsService()
    }


    componentDidMount = () => {
        this.materialService
            .getAllMaterials()
            .then(response => this.setState({ materials: response.data }))
            .catch(err => console.log(err))

    }

    render() {
        return (
            <>

            <Container as="main" className="materials-page">
                
                <h1>Listado de Contenidos/Eventos</h1>
                <Link to="/" variant="primary" className="btn btn-info btn-sm" >Volver</Link>


                {/* ESTO SOLO LO PODRAN VER LOS USUARIOS REGISTRADOS */}
                {/* {
                    this.props.loggedInUser && <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Crear nuevo item</Button>
                } */}

                

                    <h5>Estos son nuestro temas comunes, pero siempre podrás añadir otro...</h5>

                {
                    !this.state.materials.length ? <h3>CARGANDO</h3> :

                    <Row> 
                        {this.state.materials.map(elm => <MaterialCard key={elm._id} {...elm} />)}
                    </Row> 
                }
                    
                    <Row md={{ span: 5, offset: 1 }}> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" />
                        <Card.Body>
                            <Card.Title>Comedia</Card.Title>
                            <Link className="btn btn-info btn-sm" to='/new'>Accder</Link>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                        <Card.Body>
                            <Card.Title>Tragedia</Card.Title>
                            <Link className="btn btn-info btn-sm" to='/new'>Accder</Link>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1593748966033-ec8a641d4730?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                        <Card.Body>
                            <Card.Title>Infantil</Card.Title>
                            <Link className="btn btn-info btn-sm" to='/new'>Accder</Link>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1506780789966-15774276e069?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=776&q=80" />
                        <Card.Body>
                            <Card.Title>Mímica</Card.Title>
                            <Link className="btn btn-info btn-sm" to='/new'>Accder</Link>
                        </Card.Body>
                    </Card>
                    </Row>

                </Container>
                

                <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <MaterialForm handleCoasterSubmit={this.handleCoasterSubmit} />
                    </Modal.Body>
                </Modal>


            </>    

        )
    }
}

 