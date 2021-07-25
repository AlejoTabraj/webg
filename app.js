const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.get('/collections', (req, res) => {
    res.render('pages/collections')
})

app.get('/detail/:id', (req, res) => {
    res.render('pages/detail')
})









app.listen('5000', () => {
    console.log('nice')
})