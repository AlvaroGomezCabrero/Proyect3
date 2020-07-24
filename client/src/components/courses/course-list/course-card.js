import React from 'react'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


const CourseCard = ({ _id, title, description, imageUrl, }) => {


    return (

  <Col md={12}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
        <Link to={`/courses/${_id}`} className="btn btn-info btn-block btn-sm">Ver detalles</Link>
        <Link to= "/" variant="primary">Volver</Link>
        </Card.Body>
     </Col>
   
    )
}

export default CourseCard


   











