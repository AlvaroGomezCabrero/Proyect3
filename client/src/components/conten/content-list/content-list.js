import React, { Component } from 'react'
import ContentService from './../../../service/ContentService'

import ContentCard from './content-card'

import './content-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


export default class ContentList extends Component {
    constructor() {
        super()
        this.state = {
            contents: []
        }
        this.ContentService = new ContentService()
    }


    componentDidMount = () => {
        this.ContentService
            .getAllContents()
            .then(response => this.setState({ content: response.data }))
            .catch(err => console.log(err))

    }

    render() {
        return (

            <Container as="main" className="contents-page">
                
                <h1>Listdo de Contenidos/Eventos</h1>

                {
                    !this.state.content ? <h3>CARGANDO</h3> :

                    <Row> 
                            {this.state.content.map(elm => <ContentCard key={elm._id} {...elm} />)}
                    </Row> 
                }

            </Container>
        )
    }
}