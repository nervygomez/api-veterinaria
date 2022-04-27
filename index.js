const exprees = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const routes = require('./routes')
const bodyParse = require('body-parser')
const cors = require('cors')

//crear el servido
const app = exprees();

//middleware
app.use(cors());
app.use(morgan('dev')) 

// conectar a mongodb
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
// habilitar el body parser
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended : true}));

// habilitar routing
app.use('/', routes)



// puerto y arranque
app.listen(4000, () => {
    console.log('Server on Port 4000')
})