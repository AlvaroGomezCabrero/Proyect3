import React, { Component } from 'react'

import courseService from '../../../service/courseService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class CourseDetails extends Component {
    constructor() {
        super()
        this.state = {
            courseDetails: undefined
        }
        this.courseService = new courseService()
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
                        <Col md={{ span: 5, offset: 1 }}>
                            <p><b>Título:</b> {this.state.courseDetails.titile}</p>
                            <hr></hr>
                            <p><b>Descripción:</b> {this.state.courseDetails.description}</p>
                            <p><b>Participantes:</b> {this.state.courseDetails.participants}</p>
                            <hr></hr>
                            <Link className="btn btn-info btn-md" to='/courses'>Volver</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.courseDetails.imageUrl} alt={this.state.courseDetails.title} />
                        </Col>
                    </Row>

                </Container>
        )
    }
}

export default CourseDetails