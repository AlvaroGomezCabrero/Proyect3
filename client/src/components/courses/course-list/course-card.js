import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import { Link } from 'react-router-dom'


const CourseCard = ({ title, description, imageUrl, participants }) => {


    return (
        <Carousel className='course-card'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.webeac.org/wp-content/uploads/2015/05/drama-contemporaneo-206-800x600-750x400.jpg "
                    alt="Interpretación y Dramatización"
                />
                <Carousel.Caption>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://aupate.files.wordpress.com/2013/05/gestos.jpg?w=292&h=290"
                    alt="Gestual"
                />

                <Carousel.Caption>
                    <h3>Gestual</h3>
                    <p>Conocimiento del cuerpo la coordinación de movimientos y el sentido del ritmo.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cazcarra.com/blog/wp-content/uploads/2019/02/ojos2.jpg"
                    alt="Maquillaje y Caracterización"
                />

                <Carousel.Caption>
                    <h3>Maquillaje y Caracterización</h3>
                    <p>Conocer las diferentes tonalidades e intensidades del color de sombras, maquillajes, lápices y demás herramientas del maquillaje.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      
    )
}

export default CourseCard











{/* <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card> */}









//Interpretación y Dramatización
// "El conocimiento de distintos personajes, 
// el espacio donde se desenvuelven y el conflicto a interpretar"