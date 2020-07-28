import axios from 'axios'

export default class UserService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/user',    //`${process.env.DB_LOCAL}`,
            withCredentials: true
        })
    }

    getAllUsers = () => this.service.get('/getAllUsers')
    getOneUser = id => this.service.get(`/getOneUser/${id}`)
    getOneUserUpdate = id => this.service.get(`/getOneUserUpdate/${id}`)
}