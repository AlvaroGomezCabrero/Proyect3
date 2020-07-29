import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


const GenericCard = ({ _id, author, genre, theater_play, description, imageUrl }) => {
    return (
        <Col md={6}>
            <Card className='generic-card'>
            <Card.Img variant='top' src={imageUrl} />
            <Card.Body>
                <Card.Title>Obra: {theater_play} </Card.Title>
                <Card.Text>
                    Breve Descripción: {description} ||| Género: {genre}
                    </Card.Text>
                    <Card.Text>Autor: {author}</Card.Text>
                <Link to={`/materials/${_id}`} className='btn btn-outline-info navbar-color-second btn-block btn-sm'>Ver Detalle</Link>
         
            </Card.Body>
            </Card>
        </Col>
    )
}
export default GenericCard