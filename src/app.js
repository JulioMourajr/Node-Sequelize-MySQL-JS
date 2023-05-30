const express = require('express');

require('express-async-errors');

require('./config/db');

const app = express();

const router = require('./routes');

app.get('/', (req, res) => {
  res.send({message:'Bem vindo a nossa API!'});
})

app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({error: 'Ocorreu um erro!'});
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
})