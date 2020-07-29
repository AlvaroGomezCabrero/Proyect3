import React, { Component } from 'react'

import MaterialsService from '../../../service/MaterialsService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


class MaterialDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            materialDetails: {}
        }
        this.materialService = new MaterialsService()
    }

    componentDidMount = () => {

         const id = this.props.match.params.material_id
       

         this.materialService
             .getAllMaterialsById(id)
            .then(response => this.setState({ materialDetails: response.data }))
            .catch(err => console.log(err))
        
    }

    // getAllMaterialsById = (genre, id) => {
    //     this.materialService
    //     .getAllMaterialsById(genre, id)
    //         .then(response => this.setState({ materialDetails: response.data }))
    //         .catch(err => console.log(err))
    // }





    render() {
        return (
             !this.state.materialDetails ? <h3>CARGANDO</h3> :
               
                <Container as="main">

                    <h1>{this.state.materialDetails.genre}</h1>

                     <Row>
                        <Col md={{ span: 5, offset: 1 }}>
                            <p><b>Obra:</b> {this.state.materialDetails.genre}</p>
                            <hr></hr>
                            <p><b>Autor:</b> {this.state.materialDetails.author}</p>
                            <p><b>Descripción:</b> {this.state.materialDetails.description}</p>
                            <hr></hr>
                            <Link className="btn btn-info btn-md" to='/materials'>Volver</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.materialDetails.imageUrl} alt={this.state.materialDetails.genre} />
                        </Col>
                    </Row> 

                </Container>
            
        )
    }
}

export default MaterialDetails