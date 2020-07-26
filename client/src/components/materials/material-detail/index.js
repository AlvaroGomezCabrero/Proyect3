import React, { Component } from 'react'

import MaterialService from './../../../service/MaterialService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class MaterialDetails extends Component{
    constructor() {
        super()
        this.state = {
            MaterialDetails: undefined
        }
        this.MaterialService = new MaterialService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.material_id

        this.MaterialService
            .getOneMaterial(id)
            .then(response => this.setState({ MaterialDetails: response.data }))
            .catch(err => console.log(err))
    }

    render () {
        return (
            !this.state.materialDetails ?  <h1>CARGANDO</h1> :
                
                <Container as="main">
                    
                    <h1>{this.state.materialDetails.title}</h1>
                    
                    <Row>
                        <Col md={{ span: 6, offset: 1 }}>
                            <p><b>Detalles:</b>{this.state.materialDetails.description}</p>
                            <hr></hr>
                            <p><b>Imagen:</b>{this.state.materialDetails.imageUrl}</p>
                            <p><b>Género:</b>{this.state.materialDetails.genre}</p>
                            <hr></hr>
                            <Link className="btn btn-info btn-md" to='/materials'>Volver</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.materialDetails.imageUrl} alt={this.state.materialDetails.title} />
                        </Col>
                    </Row>
            </Container>
        )
    }
}

export default MaterialDetails