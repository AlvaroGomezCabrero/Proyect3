import React from 'react'


import MaterialThing from './material-thing'


import './material-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
//import { Link } from 'react-router-dom'



const MaterialList = () => {








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
                    <MaterialThing name="Infantil"  />
                    <hr></hr>
                    <MaterialThing name="Mimica"  />
                </Row>

            </Container>



        </>

    )

}
export default MaterialList