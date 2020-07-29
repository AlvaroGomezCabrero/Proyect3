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




    getOneMaterial = material_id => this.service.get(`/getOneMaterial/${material_id}`)
    createMaterial = genre => this.service.post('/newMaterial', genre)

    //updateMaterialList = id => this.service.put(`/updateMaterialList/${id}`)
    //deleteMaterial = id => this.service.get(`/deleteMaterial/${id}`)

}