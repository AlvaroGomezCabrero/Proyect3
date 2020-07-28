import React from 'react'

import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'


const MaterialCard = ({ allMaterials }) => {

    return (



        <Row>
            <ul>
                {allMaterials.map(elm => <li key={elm._id}  >{elm.theater_play}</li>)}
            </ul>
        </Row>



    )
}

export default MaterialCard


