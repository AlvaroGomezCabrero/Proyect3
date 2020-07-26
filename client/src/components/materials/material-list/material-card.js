import React from 'react'


import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'



const MaterialCard = ({  title, description, genre }) => { 

    return (
        <Col md={4}>
            <Card className='material-card'>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{genre}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>

                    <Link to={'/materials'} className='btn btn-info btn-block btn-sm'>Ver Detalles</Link>

                    {/* <Link to={"/materials"} className='btn btn-info btn-block btn-sm'>Volver </Link>  */}
                </Card.Body>
            </Card>
        </Col>


    )
}
export default MaterialCard




