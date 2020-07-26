module.exports = app => {

    // Base URLS
    app.use('/api', require('./auth.routes')) 
    app.use('/api/users', require('./users.routes'))
    app.use('/api/courses', require('./courses.routes'))
    app.use('/api/materials', require('./materials.routes'))


    app.use((req, res) => {
        res.sendFile(__dirname + "/public/index.html");
    })




}