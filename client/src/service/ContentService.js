import axios from 'axios'

export default class ContentService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/contents',
            withCredentials: true
        })
    }

    getAllContents = () => this.service.get('/getAllContents')
    getOneContent = id => this.service.get(`/getOneContent/${id}`)
    newContent = id => this.service.get(`newContent/${id}`)
    //añadir DELETE
    //and EDIT content
}