import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

import 'babel-polyfill';
import api from './routes/api/index.js';
import auth from './routes/auth/index.js';

const app = express();
dotenv.config(); //({path:''})

app.use(morgan('dev'));
app.use(cors());
app.use(express.static('dist'));

var options = {
    customCss: '.swagger-ui .topbar { display: none }'
};
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.use('/api/',api);
app.use('/auth/',auth);

app.get('*', (req,res) => {
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Express Server Listening On Port : ",`${PORT}`);
});