import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Index = () => {

    return (
        <Container fluid>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <h1>Espacio _Z</h1>
                    <hr></hr>
                    <hr></hr>
                    <hr></hr>

                    <h2>El teatro como encuentro social</h2>
                    
                    <hr></hr>
                    <hr></hr>
                <p>Descubre, comparte, interpreta</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Index