import React, { Component } from 'react'
import MaterialsService from '../../../service/MaterialsService'

import MaterialThing from './material-thing'

import MaterialCard from './material-card'

import './material-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
//import { Link } from 'react-router-dom'



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

    render() {

        return (

            <>

                <Container as="main" className="materials-page">

                    <h1>Contenidos</h1>

                    <h5>Acceder a :</h5>

                    <Row>
                        <MaterialThing name="Comedia" />
                        <hr></hr>
                        <MaterialThing name="Tragedia" />
                        <hr></hr>
                        <MaterialThing name="Infantil" />
                        <hr></hr>
                        <MaterialThing name="Mimica" />
                    </Row>
                   
                    <Row>
                        {this.state.materials.map(elm => <MaterialCard key={elm._id} {...elm} />)}
                    </Row>

                </Container>

               

            </>

        )
    }
}
export default MaterialList