import React from 'react'

import Row from 'react-bootstrap/Row'


import GenericCard from './generic-card'
import Container from 'react-bootstrap/Container'
import './generic-card.css'

const MaterialCard = ({ allMaterials }) => {

    return (
        <Container>
        <Row>
                {allMaterials.map(elm => <GenericCard key={elm._id}  {...elm} />)}
        </Row>
        </Container>


    )
}

export default MaterialCard



