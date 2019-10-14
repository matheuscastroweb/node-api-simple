const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o app
const app = express();
app.use(express.json());
//Biblioteca Cors faz com que a API possa ser acessada através de outros endereços
app.use(cors());

//Iniciando e conectando ao database database
mongoose.connect(
    'mongodb+srv://matheuscastro:matheus123@node-api-eed5m.mongodb.net/test?retryWrites=true&w=majority', 
    {
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useFindAndModify: false,
    }
        );

      
//Require Dir faz a requisição de todos os arquivos dentro da pasta model 
requireDir('./src/models');

//Definição do Model product
const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

//Porta de utilização 
app.listen(3001);