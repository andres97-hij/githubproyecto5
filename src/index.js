'use strict'
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const mysql = require('mysql');



//inicio
const app = express();

//configuracion
app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//variables globales
app.use((req, res, next) => {
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/usuario', require('./routes/usuario'));
app.use('/barras', require('./routes/barras'));
app.use('/tubulares', require('./routes/tubulares'));
app.use('/canal', require('./routes/canal'));
app.use('/marcos', require('./routes/marcos'));
app.use('/mapa', require('./routes/mapa'));
app.use('/formulario', require('./routes/formulario'));
app.use('/productos', require('./routes/productos'));
app.use('/administrador', require('./routes/administrador'));
app.use('/bato', require('./routes/bato'));
app.use('/barrasformu', require('./routes/barrasformu'));
app.use('/tiendas', require('./routes/tiendas'));
app.use('/cosmesticos', require('./routes/cosmesticos'));
app.use('/bisuteria', require('./routes/bisuteria'));
app.use('/gorra', require('./routes/gorras'));
app.use('/bolso', require('./routes/bolso'));
app.use('/traje', require('./routes/traje'));
app.use('/ropanino', require('./routes/ropanino'));
app.use('/ropanina', require('./routes/ropanina'));
app.use('/mujere', require('./routes/mujere'));
app.use('/polvocosme', require('./routes/polvocosme'));
app.use('/cards', require('./routes/cards'));
app.use('/carro', require('./routes/carro'));
app.use('/face', require('./routes/face'));

//crud con mvc 
app.use('/mouse', require('./routes/mouse'));
app.use('/tienda', require('./routes/tiendas'));
app.use('/compra', require('./routes/compra'));
app.use('/peluqueria', require('./routes/peluqueria'));

//TEC1D-12021
app.use('/', require('./routes/'));
app.use('/comercio', require('./routes/comercio'));
app.use('/administracion', require('./routes/administracion'));
app.use('/contacto', require('./routes/contacto'));
app.use('/empleado', require('./routes/empleado'));
app.use('/categoria', require('./routes/categoria'));




//public
app.use(express.static(path.join(__dirname, 'public')));

//iniciar server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});