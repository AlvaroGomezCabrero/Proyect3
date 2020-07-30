import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'

import GenericCard from './generic-card'
import Container from 'react-bootstrap/Container'
import './generic-card.css'
import { Link } from 'react-router-dom'

import MaterialsService from '../../../service/MaterialsService'


class MaterialCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            materials: undefined
        }

        this.service = new MaterialsService()
    }

    componentDidMount() {
        this.service.getAllMaterialsBy(this.props.match.params.material_genre)
            .then(response => this.setState({ materials: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>
                <Row>
                    {this.state.materials ? this.state.materials.map((elm, idx) => <GenericCard key={idx} {...elm} />) : <div>CARGANDO...</div>}
                </Row>

                <Link to="/materials" variant="outline-warning" className="btn btn-warning  btn-sm">Volver </Link>
            </Container>


        )
    }
}

export default MaterialCard



