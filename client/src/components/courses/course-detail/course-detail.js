import React, { Component } from 'react'

import CourseService from '../../../service/CourseService'



import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

class CourseDetails extends Component {
    constructor() {
        super()
        this.state = {
            courseDetails: {}
        }
        this.courseService = new CourseService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.course_id

        this.courseService
            .getOneCourse(id)
            .then(response => this.setState({ courseDetails: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (

            !this.state.courseDetails ? <h3>CARGANDO</h3> :

                <Container as="main">

                    <h1>{this.state.courseDetails.title}</h1>

                    <Row>
                        
                        <Col md={{ offset: 3, span: 6 }}>
                <h3>Rellena tus datos </h3>
                        {/* ESTO ES UN CURSO PARA APUNTARSE, POR LO QUE DATOS Y UN ENVIAR */}

                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="soyyo@gmail.com" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control placeholder="Calle Falsa, 123" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Ciudad</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Código Postal</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Button className="btn btn-info btn-md" type="submit">Enviar</Button>
                            <hr></hr>
                            <Link className="btn btn-info btn-md" to='/courses'>Volver</Link>
                        </Form>
                        </Col>
                    </Row>

                </Container>
        )
    }
}

export default CourseDetails