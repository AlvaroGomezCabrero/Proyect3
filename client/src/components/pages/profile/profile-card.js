import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import UserService from '../../../service/UserService'

import './profile.css'


class ProfileDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            surname: '',
            description: '',
            my_courses: '',
            favourite: '',
            _id: '',
        }
        this.service = new UserService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.user_id

        this.userService
            .getOneUser(id)
            .then(response => this.setState({ profileDetails: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
           
             !this.state.profileDetails ? <h3>CARGANDO</h3> :

                <Form>
                <Form.Group>
                        <Form.Label>{this.state.username}</Form.Label>
                </Form.Group>

                    <Form.Label>Favoritos</Form.Label>
                    <Form.Control as="select" disabled>
                        <option>Comedia</option>
                        <option>Tragedia</option>
                        <option>Infantil</option>
                        <option>Mímica</option>
                  </Form.Control>
                
                
                    <Form.Label>Cursos</Form.Label>
                    <Form.Control as="select" disabled>
                        <option>Ninguno</option>
                        <option>Interpretación y dramatización</option>
                        <option>Gestual</option>
                        <option>Maquillaje y caracterización</option>
                    </Form.Control>
                    
                    
                <Form.Group>
                        <Button type="submit">Enviar</Button>
                </Form.Group>   
                </Form>        
        )
    }
}
        
export default ProfileDetails