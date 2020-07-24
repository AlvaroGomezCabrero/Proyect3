import axios from 'axios'

export default class CourseService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/courses',
            withCredentials: true
        })
    }

    getAllCourses = () => this.service.get('/getAllCourses')
    getOneCourse = id => this.service.get(`/getOneCourse/${id}`)
}