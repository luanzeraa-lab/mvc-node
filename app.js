const express = require('express');
const app = express();

const loginRoute = require('./routes/loginRoute');

app.use(loginRoute);

app.set('view engine', 'ejs');
app.set('views', './view')

app.listen(3000, function(){
    console.log('APP rodando na porta 3000');
})