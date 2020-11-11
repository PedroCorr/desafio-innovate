const express = require('express');
const path = require('path')
import React from 'react';
import ReactDOM from 'react-dom/server';

import AppComponent from './src/App';


const server = express();

server.get('/', function(require, response ){
    response.get(app.js)
    return response.render(path.resolve(__dirname))

})


server.listen(5500, () => {
    console.log('Testando');
})