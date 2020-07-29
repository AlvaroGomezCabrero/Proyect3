import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const GenericCard = ({ _id, author, genre, theater_play, description, imageUrl }) => {
    return (
        <Container>
        <Col md={11}>
            <Card className='generic-card'>
            <Card.Img variant='top' src={imageUrl} />
            <Card.Body>
                <Card.Title>Obra: {theater_play} </Card.Title>
                <Card.Text>
                    Breve Descripción: {description} ||| Género: {genre}
                    </Card.Text>
                    <Card.Text>Autor: {author}</Card.Text>
                <Link to={`/materials/${genre}/${_id}`} className='btn btn-outline-info navbar-color-second btn-block btn-sm'>Ver Detalles</Link>
         
            </Card.Body>
            </Card>
            </Col>
        </Container>
    )
}
export default GenericCard