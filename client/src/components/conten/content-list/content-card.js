import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

const ContentCard = ({ title, description, genre }) => { 

    return (

<Col md={4}>
    <Card className='content-card'>
    <Card.Body>
    <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{genre}</Card.Subtitle>
      <Card.Text>{description}</Card.Text>
    <Button variant="info" size="sm" block>Ver Detalles</Button>
    <Card.Link href="/conten">Volver</Card.Link>
    </Card.Body>
    </Card>
</Col>
    )
}
export default ContentCard