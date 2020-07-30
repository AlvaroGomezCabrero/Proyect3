import React, { Component } from 'react'

import MaterialsService from '../../../service/MaterialsService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from '../../ui/Spinner'
import Button from 'react-bootstrap/Button'



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


    render() {
        return (

            !this.state.materialDetails ? <Spinner /> :

                <Container as="main">

                    <h1>{this.state.materialDetails.genre}</h1>

                    <Row>
                        <Col md={{ span: 5, offset: 1 }}>
                            <p><b>Obra:</b> {this.state.materialDetails.theater_play}</p>
                            <hr></hr>
                            <p><b>Autor:</b> {this.state.materialDetails.author}</p>
                            <p><b>Descripción:</b> {this.state.materialDetails.description}</p>
                            <hr></hr>
                            <Button onClick={() => this.props.history.goBack()} className="btn btn-warning btn-md" >Volver</Button>
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