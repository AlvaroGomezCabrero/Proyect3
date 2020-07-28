import axios from 'axios'

export default class MaterialsService {

    constructor() {

        this.service = axios.create({
            baseURL: `http://localhost:5000/api/materials`,     //`${process.env.DB_LOCAL}`,
            withCredentials: true
        })
    }

    getAllMaterials = () => this.service.get('/getAllMaterials')
    getOneMaterial = genre => this.service.get(`/getOneMaterial/${genre}`)
    createMaterial = genre => this.service.post('/newMaterial', genre)

    //updateMaterialList = id => this.service.put(`/updateMaterialList/${id}`)
    //deleteMaterial = id => this.service.get(`/deleteMaterial/${id}`)

}