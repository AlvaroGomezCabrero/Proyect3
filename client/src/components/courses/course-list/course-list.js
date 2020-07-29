import React, { Component } from 'react'
import courseService from '../../../service/CourseService'

import CourseCard from './course-card'

import './course-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'


export default class CourseList extends Component{
    constructor (){
        super ()
        this.state = {
            courses: []
        }
        this.courseService = new courseService()
    }


    componentDidMount = () => {
        this.courseService
            .getAllCourses()
            .then(response => this.setState({ courses: response.data }))
            .catch(err => console.log(err))

}

    render () {
        return (

            <Container as="main" className="courses-page">
                
                <h1>Listdo de Cursos</h1>
                <Link to="/" variant="primary" className="btn btn-info btn-sm">Volver</Link>

                {
                    !this.state.courses.length ? <h3>CARGANDO</h3> :
                        
                <Row>
                    {this.state.courses.map(elm => <CourseCard key={elm._id} {...elm} />)}
                </Row>
                   
                }    
                
            </Container>
        )
    }
}

