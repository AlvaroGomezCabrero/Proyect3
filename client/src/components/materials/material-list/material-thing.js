import React from 'react'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


const MaterialThing = ({ name }) => {

    return (
        <Col md={6}>

            <Link to={`/materials/${name}`} className="btn btn-info btn-block btn-sm">{name}</Link>

        </Col>


    )
}

export default MaterialThing