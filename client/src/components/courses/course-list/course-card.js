import React from 'react'

import Carousel from 'react-bootstrap/Carousel'


const CourseCard = ({ _id, title, description, imageUrl, participants }) => {


    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.webeac.org/wp-content/uploads/2015/05/drama-contemporaneo-206-800x600-750x400.jpg "
                    alt="Interpretación y Dramatización"
                />
                <Carousel.Caption>
                    <h3>Interpretación y Dramatización</h3>
                    <p>"El conocimiento de distintos personajes, 
                    el espacio donde se desenvuelven y el conflicto a interpretar"</p>
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