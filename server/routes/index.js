module.exports = app => {

    // Base URLS
    app.use('/api', require('./auth.routes'))
    app.use('/api/users', require('./users.routes'))
    app.use('/api/courses', require('./courses.routes'))
    app.use('/api/content', require('./content.routes'))
}