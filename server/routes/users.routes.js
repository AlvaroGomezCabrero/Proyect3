const express = require('express')
const router = express.Router()

const User = require('../models/User.model')

// Endpoints
router.get('/getAllUsers', (req, res, next) => {

    User.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/getOneUser/:id', (req, res, next) => {

    User.findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/getOneUserUpdate/:id', (req, res, next) => {

    User.findByIdAndUpdate(req.params.id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router