import React from 'react'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


const MaterialCardComedia = ({ title, description, theater_play, author, imageURL })  => {

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageURL}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{theater_play}</ListGroupItem>
                <ListGroupItem>{author}</ListGroupItem>
                
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Editar</Card.Link>
                <Card.Link href="#">Eliminar</Card.Link>
            </Card.Body>
        </Card>

    )
}

export default MaterialCardComedia




