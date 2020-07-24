import React from 'react'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


const CourseCard = ({ title, description, imageUrl, }) => {


    return (

  <Col md={12}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description}
        </Card.Text>
            <Link to= ""variant="primary"></Link>
        </Card.Body>
     </Col>
   
    )
}

export default CourseCard


   











