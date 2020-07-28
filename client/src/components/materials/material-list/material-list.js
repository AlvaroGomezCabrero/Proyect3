import React, { Component } from 'react'
import MaterialsService from '../../../service/MaterialsService'

import MaterialCard from './material-card'
import MaterialForm from './../material-form'

import './material-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'


class MaterialList extends Component {
    constructor() {
        super()
        this.state = {
            materials: [],
            showModal: false

        }
        this.materialService = new MaterialsService()
    }


    componentDidMount = () => this.updateMaterialList()

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

                <Container as="main" className="materials-page">

                    <h1>Listado de Contenidos</h1>

                    <Link to="/" variant="primary" className="btn btn-info btn-sm" >Volver</Link>
                    <hr></hr>
                    <Link onClick={() => this.handleModal(true)} className="btn btn-info btn-sm" to='/new-comedia' style={{ marginBottom: '20px' }}>Nuevo</Link>

                    <h5>Estos son nuestro temas comunes, pero siempre podrás añadir otro...</h5>

                    {
                        !this.state.materials.length ? <h3>CARGANDO</h3> :

                            <Row>
                                {this.state.materials.map(elm => <MaterialCard key={elm._id} {...elm} />)}
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
export default MaterialList