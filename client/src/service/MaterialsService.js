import axios from 'axios'

export default class MaterialsService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/materials',     //`${process.env.DB_LOCAL}`,
            withCredentials: true
        })
    }

    getAllMaterials = () => this.service.get('/getAllMaterials')
    getOneMaterial = id => this.service.get(`/getOneMaterial/${id}`)
    createMaterial = material => this.service.post('/newMaterial', material)

    updateMaterial = id => this.service.get(`/updateMaterial/${id}`)
    deleteMaterial = id => this.service.get(`/deleteMaterial/${id}`)
    
}