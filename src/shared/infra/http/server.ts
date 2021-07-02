import "reflect-metadata";
import "express-async-errors"
import express from 'express';
import { genericError } from './middlewares/genericError';
import { router } from './routes';
import '@shared/infra/typeorm/'
import '@shared/container'
 
const app = express();

app.use(express.json()); // para aceitar requisição do tipo json
app.use(router); 
app.use(genericError); 
app.listen(4444);
console.log('Servidor executando na porta 4444.')

 