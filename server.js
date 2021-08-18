'use strict'

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
//const sessions = require('./sessions.json');
const sessions = fs.readFileSync(path.join(__dirname, 'sessions.json'),'utf8');
const port = process.env.PORT || 3011;

app.get('/',(req,res) => {
    res.send('<h1> Hello nCino JS Devs from Express </h1');
});

app.get('/api/sessions', (req,res) =>{
    res.json(JSON.parse(sessions));
});

app.listen(port, () =>{
    console.log(`Express Server Running on Port http://localhost:${port}`);
});