'use strict'

const http = require('http');
const port = process.env.PORT || 3010;
const sessions = require('./sessions.json');


const server = http.createServer((req,res) =>{

    if(req.url === '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<h1> Hello from nCino JS Developer </h1>');
    res.write('<p> This is the first nodeJS application </p>');
    res.end();
    }
    else if(req.url === '/api/sessions'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.write(JSON.stringify(sessions));
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/text'});
        res.write(`404: Not Found - ${req.url}`);
    }

    
});

server.listen(port,() =>{
    console.log(`Server is Running on http://localhost:${port}`);
});