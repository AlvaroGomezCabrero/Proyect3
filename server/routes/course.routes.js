const express = require('express')
const router = express.Router()

const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

const Course = require('./../models/Course.model')
const User = require('./../models/User.model')

// Endpoints
router.get('/getAllCourses', (req, res, next) => {

    Course.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/profile', checkAuthenticated, (req, res) => {
    res.render('profile', { user: req.user })
})


// router.get('/getOneCourse/:course_id', (req, res, next) => {

//     Course.findById(req.params.course_id)
//         .then(response => res.json(response))
//         .catch(err => next(err))
// })


// router.post('/newCourse', (req, res, next) => {

//     Coaster.create(req.body)
//         .then(response => res.json(response))
//         .catch(err => next(err))
//})


module.exports = router