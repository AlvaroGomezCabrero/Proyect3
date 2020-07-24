import axios from 'axios'

export default class CourseService {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            withCredentials: true
        })
    }

    getAllCourses = () => this.service.get('/getAllCourses')
    getOneCourse = id => this.service.get(`/getOneCourse/${id}`)
}