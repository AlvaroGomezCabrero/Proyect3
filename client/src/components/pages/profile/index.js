
import React, { Component } from 'react'
import CoasterService from '../../../service/CoasterService'

class ProfileForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            favourite:'',
            my_courses: '',
            role: '',
        }
        this.coasterService = new CoasterService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.CoasterService
            .createCoaster(this.state)
            .then(response => response.data)
            .catch(err => console.log(err))
    }


    render() {
        
            return (
            <>
            <form onSubmit={this.handleFormSubmit}>
            Favoritos <input onChange={this.handleInputChange} value={this.state.favourite} name="favourite" type="text" /> <br></br>
            Mis Cursos <input onChange={this.handleInputChange} value={this.state.my_courses} name="my_courses" type="text" /> <br></br>
            Rol <input onChange={this.handleInputChange} value={this.state.role} name="role" type="text" /> <br></br>
            <input type="submit" value="Enviar" />
            </form>
            </>
            )
            
    }
}

export default ProfileForm

