import React from 'react'

//import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'


const MaterialCard = ({ name, imageUrl, description, theater_play, author, genre }) => {

    return (

    
        <Col md={6}>
            
            <Link to="/materials" variant="primary" className="btn btn-info btn-sm" >Volver</Link>
            <hr></hr>
            <Card className="material-card">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>Obra: {theater_play}</Card.Title>
                    <p>autor: {author}</p>
                    <p>descripcion: {description}</p>
                    <p>género: {genre}</p>
                    <Link to={ `/materials/${name}`}  className="btn btn-info btn-block btn-sm">Abrir</Link>
                </Card.Body>

            </Card>

        </Col>
            
    
        
    )
}

export default MaterialCard


