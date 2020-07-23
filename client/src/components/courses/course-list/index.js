import React, { Component } from 'react'
import CourseService from '../../../service/courseService'

import './course-list.css'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


class CourseList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: undefined,
            showModal: false
        }
        this.courseService = new CourseService()
    }

    componentDidMount = () => this.updateCourseList()

    updateCourseList = () => {
        this.courseService
            .getAllCourses()
            .then(response => this.setState({ courses: response.data }))
            .catch(err => console.log(err))
    }

    handleCourseSubmit = () => {
        this.handleModal(false)
        this.updateCourseList()
    }

    render() {

        return (

            <>

                <Container as="main" className="course-page">

                    <h1>Listado de cursos</h1>

                    {
                        this.props.loggedInUser && <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Crear nuevo item</Button>
                    }

                </Container>

            </>

        )
    }
}

export default CourseList
