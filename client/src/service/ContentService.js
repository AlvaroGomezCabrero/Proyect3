import axios from 'axios'

export default class ContentService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/contents',
            withCredentials: true
        })
    }

    getAllContents = () => this.service.get('/getAllContents')
    getOneContent = id => this.service.get(`/getOneContent/${id}`)
    createContent = content => this.service.get('/newContent', content)
    //añadir DELETE
    //and EDIT content
}