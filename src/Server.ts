import express from 'express';
import logger from 'morgan';

import BaseRouter from './router';


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', BaseRouter);

export default app;
