module.exports = app => {

    // Base URLS
    app.use('/', require('./auth.routes'))
    app.use('/users', require('./users.routes'))
    app.use('/courses', require('./courses.routes'))
    app.use('/conten', require('./content.routes'))
}