module.exports = app => {

    // Base URLS
    //app.use('/api/coasters', require('./coaster.routes'))
    //app.use('/api', require('./auth.routes'))

    app.use('/courses', require('./course.routes'))
 
    //app.use('/api', require('./auth.routes'))
}