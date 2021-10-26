const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes y estados
app.use(require('./routes'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// starting the server//
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

///segunda guerra mundial esta mas cerca que cualquier cosa mundia
// jugaremos los metodos de java script

