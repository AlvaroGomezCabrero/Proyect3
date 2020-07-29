import React, { Component } from 'react'

import MaterialsService from './../../../service/MaterialsService'


class MaterialDetails extends Component{
    constructor(){
        super()
        this.state = {
            materialDetails: { }
        }
        this.materialsService = new MaterialsService
    }

    componentDidMount = () => {

        console.log("tengo que mandarme el genre x")
    }

    render () {
        return (
            <>
                <h1>yay</h1>
            </>
        )
    }
}

export default MaterialDetails