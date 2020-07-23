import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Index = () => {

    return (
        <Container fluid>
            <Row>
                <Col md={{ offset: 4, span: 8 }}><h1>Espacio _Z</h1></Col>
                <hr></hr>
                <Col md={{ offset: 3, span: 11 }}><h2>El teatro como encuentro social</h2></Col>
                <Col md={{ offset: 4, span: 8 }}><p>Descubre, comparte, interpreta</p></Col>
            </Row>
        </Container>
    )
}

export default Index