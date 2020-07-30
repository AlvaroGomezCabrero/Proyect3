import React from 'react'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


const MaterialThing = ({ name }) => {

    return (
        <Col md={6}>

            <Link to={`/materials/${name}`} className="btn btn-warning btn-block btn-sm">{name}</Link>
            <hr></hr>
            

        </Col>

    )
}

export default MaterialThing