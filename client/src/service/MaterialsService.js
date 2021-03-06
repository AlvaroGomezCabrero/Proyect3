import axios from 'axios'

export default class MaterialsService {

    constructor() {

        this.service = axios.create({
            baseURL: `http://localhost:5000/api/materials`,     //`${process.env.DB_LOCAL}`,
            withCredentials: true
        })
    }

    getAllMaterials = () => this.service.get('/getAllMaterials')
    getAllMaterialsBy = (genre) => this.service.get(`/getMaterialsBy/${genre}`)
    getAllMaterialsById = (id) => this.service.get(`/getMaterialsById/${id}`)
    createMaterial = material => this.service.post('/newMaterial', material)

    //updateMaterialList = id => this.service.put(`/updateMaterialList/${id}`)
    //deleteMaterial = id => this.service.get(`/deleteMaterial/${id}`)

}