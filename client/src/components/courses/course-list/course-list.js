import React, { Component } from 'react'
import courseService from '../../../service/CourseService'

import CourseCard from './course-card'

import './course-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import Spinner from '../../ui/Spinner'


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
                <Link to="/" variant="outline-warning" className="btn btn-warning btn-sm">Volver</Link>
                <hr></hr>
                {
                    !this.state.courses.length ? <Spinner />:
                        
                <Row>
                    {this.state.courses.map(elm => <CourseCard key={elm._id} {...elm} />)}
                </Row>
                   
                }    
                
            </Container>
        )
    }
}

