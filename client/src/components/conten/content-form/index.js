import React, { Component } from 'react'
import ContentService from '../../../service/ContentService'



class ContentForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            imageURL: '',
            genre: '',
            
        }
        this.contentService = new ContentService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

}



export default ContentForm