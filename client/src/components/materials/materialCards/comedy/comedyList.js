import React, { Component } from 'react'
import MaterialsService from '../../../../service/MaterialsService'

import MaterialCardComedy from './card-comedy'
import MaterialForm from '../../material-form'

import '../../material-list/material-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
//import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


class MaterialListComedy extends Component {
    constructor() {
        super()
        this.state = {
            materials: [],
            showModal: false
        }
        this.materialService = new MaterialsService()
    }

    componentDidMount = () => {

        this.materialsService
            .getAllMaterials()
            .then(response => this.setState({ materials: response.data }))
            .catch(err => console.log(err))
        
        
    }
        
        
        
       // this.updateMaterialList()

    updateMaterialList = () => {
        this.materialService
            .getAllMaterials()
            .then(response => this.setState({ materials: response.data }))
            .catch(err => console.log(err))

    }

    handleModal = status => this.setState({ showModal: status })

    handleMaterialSubmit = () => {
        this.handleModal(false)
        this.updateMaterialList()
    }


    render() {

        return (

             <>
                <Container as="main" className="materials-comedypage">

                    <h1>Listado de Contenidos de Comedia</h1>

                    <Button  onClick={() => this.handleModal(true)} className="btn btn-info btn-sm" style={{ marginBottom: '20px' }}>Nuevo</Button>
              
                    {
                        !this.state.materials.length ? <h3>CARGANDO</h3> :

                            <Row>
                                {this.state.materials.map(elm => <MaterialCardComedy key={elm._id} {...elm} />)}
                            </Row>
                    } 

                 </Container>
                 <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <MaterialForm handleMaterialSubmit={this.updateMaterialListSubmit} />
                    </Modal.Body>
                </Modal> 

            </>  

        )
    }
}
export default MaterialListComedy