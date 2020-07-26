import React, { Component } from 'react'
import MaterialsService from '../../../service/MaterialsService'

import MaterialCard from './material-card'

import './material-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'


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

            <Container as="main" className="materials-page">
                
                <h1>Listado de Contenidos/Eventos</h1>
                <Link to="/" variant="primary" className="btn btn-info btn-sm" >Volver</Link>

                {
                    !this.state.materials.length ? <h3>CARGANDO</h3> :

                    <Row> 
                        {this.state.materials.map(elm => <MaterialCard key={elm._id} {...elm} />)}
                    </Row> 
                }

            </Container>
        )
    }
}

 