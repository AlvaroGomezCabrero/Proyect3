import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import AuthService from './../../../service/AuthService'

import { Link, NavLink } from 'react-router-dom'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.AuthService = new AuthService()
    }

    logout = () => {
        this.AuthService
            .logout()
            .then(() => {
                this.props.setTheUser(false)
                this.props.handleToast(true, 'Usuario desconectado')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Navbar bg="info" variant="info" expand="lg" sticky="top" >
                <Navbar.Brand>
                    <Link to="/">Espacio_Z</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as="span">
                            <NavLink to="/" exact activeStyle={{ color: 'black' }}>Inicio</NavLink>
                        </Nav.Link>
                    
                        <Nav.Link as="span">
                            <NavLink to="/courses" activeStyle={{ color: 'black' }}>Cursos</NavLink>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <NavLink to="/materials" activeStyle={{ color: 'black' }}>Contenido</NavLink>
                        </Nav.Link>

                        {this.props.loggedInUser ?
                            /* ( */
                               
                                /* <Nav.Link as="span">
                                    <span onClick={this.isLoggedIn} to="/materials" activeStyle={{ color: 'black' }}>Contenido</span>
                                </Nav.Link> */

                            /* ) */
                            (

                                <Nav.Link as="span">
                                    <span onClick={this.logout}>Cerrar sesión</span>
                                </Nav.Link>
                            )

                             : (
                                <>
                                    <Nav.Link as="span">
                                        <NavLink to="/signup" activeStyle={{ color: 'black' }}>Registro</NavLink>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <NavLink to="/login" activeStyle={{ color: 'black' }}>Inicio sesión</NavLink>
                                    </Nav.Link>
                                </>
                            )
                        }

                        <Nav.Link as="span">
                            <NavLink to="/profile" activeStyle={{ color: 'black' }}>Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'}</NavLink>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation