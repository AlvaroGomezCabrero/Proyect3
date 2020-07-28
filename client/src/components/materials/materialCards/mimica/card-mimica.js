import React from 'react'

import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'

const MaterialCardMimica = ({ title, imageUrl, description }) => {


    return (
        <Col md={6}>
            <Card className="material-card">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>{description}</p>
                    <Link to={'/new-mimica'} className="btn btn-info btn-block btn-sm">Abrir</Link>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default MaterialCardMimica