import React from 'react'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const ContentCard = ({ _id, title, description, genre }) => { 

    return (

<Col md={4}>
    <Card className='conten-card'>
    <Card.Body>
    <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{genre}</Card.Subtitle>
      <Card.Text>{description}</Card.Text>
      
    <Link to={`/conten/${_id}`} className='btn btn-info btn-block btn-sm'>Ver Detalles</Link>
    
    <Link to={"/conten"} className='btn btn-info btn-block btn-sm'>Volver </Link>
    </Card.Body>
    </Card>
</Col>
    )
}
export default ContentCard