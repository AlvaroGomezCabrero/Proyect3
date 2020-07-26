import axios from 'axios'

export default class CourseService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/courses/',    //`${process.env.DB_LOCAL}`,
            withCredentials: true
        })
    }

    getAllCourses = () => this.service.get('/getAllCourses')
    getOneCourse = id => this.service.get(`/getOneCourse/${id}`)
}