import React, { Component } from 'react'

import ContentService from './../../../service/ContentService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class ContentDetails extends Component{
    constructor (){
        super ()
        this.state = {
            contentDetails: undefined
        }
        this.ContentService = new ContentService ()
    }

    componentDidMount = () => {

        const id = this.props.match.params.content_id

        this.ContentService
            .getOneContent(id)
            .then(response => this.setState({ contentDetails: response.data }))
            .catch(err => console.log(err))
    }

    render () {
        return (
            !this.state.contentDetails ?  <h1>CARGANDO</h1> :
                
            <Container as="main">
                    <h1>{this.state.contentDetails.title}</h1>
                    
                    <Row>
                        <Col md={{ span: 6, offset: 1 }}>
                            <p><b>Detalles:</b>{this.state.contentDetails.description}</p>
                            <hr></hr>
                            <p><b>Imagen:</b>{this.state.contentDetails.imageUrl}</p>
                            <p><b>Género:</b>{this.state.contentDetails.genre}</p>
                            <hr></hr>
                            <Link className="btn btn-info btn-md" to='/conten'>Volver</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.contentDetails.imageUrl} alt={this.state.contentDetails.title} />
                        </Col>
                    </Row>
            </Container>
        )
    }
}

export default ContentDetails