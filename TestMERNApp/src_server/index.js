import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

import 'babel-polyfill';
import api from './routes/api/index.js';
import auth from './routes/auth/index.js';
//import get from './routes/get/index.js';

const app = express();
dotenv.config(); //({path:''})

app.use(morgan('dev'));
app.use(cors());
app.use(express.static('dist'));

app.use('/api/',api);
app.use('/auth/',auth);
//app.use('/',get);

app.get('*', (req,res) => {
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Express Server Listening On Port : ",`${PORT}`);
});