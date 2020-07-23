const express = require('express')
const router = express.Router()

const Content = require('./../models/Content.model')

// Endpoints
router.get('/getAllContents', (req, res, next) => {

    Content.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/getOneContent/:content_id', (req, res, next) => {

    Content.findById(req.params.content_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/newContent', (req, res, next) => {

    Content.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})


//añadir delete and edit content

module.exports = router