const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const cors = require('cors')


const whitelist = [process.env.DOMAIN, 'https://localhost:3000' ]
const corsOptions = {
    origin: (origin, cb) => {
        const originIsWhitelisted = whitelist.includes(origin)
        cb(null, originIsWhitelisted)
    },
    credentials: true
}



module.exports = app => {
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())
   // app.use(cors(corsOptions))
    
    
    app.use(cors(corsOptions));



    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000',);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader('Access-Control-Allow-Credentials', true);
        //res.header('Access-Control-Allow-Origin', '*');

        next();
    })
    
    app.use(cors({origin: true}))
}