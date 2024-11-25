const express = require('express');
const usuarioRouter = require('./routes/users');
const lista1Router = require('./routes/lista1');
const lista2Router = require('./routes/lista2');

const app = express();
app.use(express.json());

app.use('/users', usuarioRouter);
app.use('/lista1', lista1Router);
app.use('/lista2', lista2Router);


app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

