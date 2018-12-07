import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import 'babel-polyfill';

import api from './routes/api';
import auth from './routes/auth';
import user from './routes/user';

const app = express();

dotenv.config(); //({path:''})

app.use(morgan('dev'));
app.use(cors());
app.use(express.static('dist'));

var options = {
    customCss: '.swagger-ui .topbar { display: none }'
};
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./json/swagger.json');
app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.use('/api/',api);
app.use('/auth/',auth);
app.use('/user/',user);

app.get('*', (req,res) => {
    res.redirect('/');
});

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log("Express Server Listening On Port : ",`${PORT}`);
});