import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'

import GenericCard from './generic-card'
import Container from 'react-bootstrap/Container'
import './generic-card.css'
import { Link } from 'react-router-dom'
import MaterialForm from './../material-form'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


import MaterialsService from '../../../service/MaterialsService'


class MaterialCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            materials: undefined,
            showModal: false
        }

        this.service = new MaterialsService()
    }

    componentDidMount() {
        this.service.getAllMaterialsBy(this.props.match.params.material_genre)
            .then(response => this.setState({ materials: response.data }))
            .catch(err => console.log(err))
    }

    handleModalShow = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })

    render() {

        return (
            <>
            <Container>
                {
                <Row>
                {this.state.materials ? this.state.materials.map((elm, idx) => <GenericCard key={idx} {...elm} />) : <div>CARGANDO...</div>}
                </Row>
                }
                    <hr></hr>
               
                    <Button onClick={this.handleModalShow} variant="outline-warning" className="btn btn-outline-warning btn-sm" >Crear Archivo</Button>  
                    
                <hr></hr>
                    <Link to="/materials" variant="outline-warning" className="btn btn-warning btn-sm">Volver </Link>
                

            </Container>

                <Modal show={this.state.showModal}  onHide={this.handleModalClose}>  
                <Modal.Body>
                    <MaterialForm /> 
                </Modal.Body>
                </Modal>
                
            </>
            
            
            


        )
    }
}

export default MaterialCard



