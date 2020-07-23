const express = require('express')
const router = express.Router()

const Course = require('./../models/Course.model')

// Endpoints
router.get('/getAllCourses', (req, res, next) => {

    Course.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/getOneCourse/:course_id', (req, res, next) => {

    Course.findById(req.params.course_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router