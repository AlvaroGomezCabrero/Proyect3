import React, { Component } from 'react'

import MaterialsService from './../../../service/MaterialsService'

import MaterialCard from './../../materials/material-list/material-card'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class MaterialDetails extends Component{
    constructor(props) {
        super(props)
        this.state = {
            materialDetails: {},
           
        }
        //console.log(materialDetails)
        this.MaterialsService = new MaterialsService()
    }

    componentDidMount = () => {

       const id = this.props.match.params.material_id

        this.MaterialsService
            .getOneMaterial(id)
            .then(response => this.setState({ materialDetails: response.data }))
            .catch(err => console.log(err))
    }

    render () {
        return (

             !this.state.materialDetails ?  <h3>CARGANDO</h3> :
                
                <Container as="main">
                    
                    <h1>{this.state.materialDetails.title}</h1>

                    {/* <Link onClick={() => this.handleModal(true)} className="btn btn-info btn-sm" to='/new-comedia' style={{ marginBottom: '20px' }}>Nuevo</Link> */}
                    
                    <Row>
                        <Col md={8}>
                            <p><b>Detalles:</b>{this.state.materialDetails.description}</p>
                            <hr></hr>
                            <p><b>Imagen:</b>{this.state.materialDetails.imageUrl}</p>
                            <p><b>Género:</b>{this.state.materialDetails.genre}</p>
                            <p><b>Autor:</b>{this.state.materialDetails.author}</p>
                            <p><b>Obra:</b>{this.state.materialDetails.theater_play}</p>
                            <p><b>Añade item:</b>{this.state.materialDetails.ad_item}</p>
                            <hr></hr>
                            <Link className="btn btn-info btn-md" to='/materials'>Volver</Link>
                        </Col>

                        <Col md={4}>
                            <img src={this.state.materialDetails.imageUrl} alt={this.state.materialDetails.title} />
                        </Col>
                    </Row>

                        {
                        <Row>
                            {this.state.materials.map(elm => <MaterialCard key={elm._id} {...elm} />)}
                        </Row>
                    }
            

             </Container>
        )
    }
}

export default MaterialDetails