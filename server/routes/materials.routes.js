const express = require('express')
const router = express.Router()

const Material = require('./../models/Materials.model')

// Endpoints
router.get('/getAllMaterials', (req, res, next) => {

    Material.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/getOneMaterial/:material_id', (req, res, next) => {

    Material.findById(req.params.material_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/newMaterial', (req, res, next) => {

    Material.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})


//EDITAR

router.get('/updateMaterialList/:material_id', (req, res, next) => {

    Material.findByIdAndupdate(req.params.material_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


//ELIMINAR

router.get('/deleteMaterial/:material_id', (req, res, next) => {

    Material.findByIdAndDelete(req.params.material_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})



module.exports = router