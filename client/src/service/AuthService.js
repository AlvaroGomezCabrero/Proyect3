import axios from 'axios'

export default class AuthService {

    constructor() {

        this.service = axios.create({
            baseURL: `http://localhost:5000/api`,    // `${process.env.DB_LOCAL}`,
            withCredentials: true
        })
    }

    login = credentials => this.service.post('/login', credentials)
    signup = credentials => this.service.post('/signup', credentials)
    logout = () => this.service.post('/logout')
    isLoggedIn = () => this.service.get('/loggedin')

}
