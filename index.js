#!/usr/bin/env node
const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    const myURL = new URL(req.url, `http://${hostname}:${port}`);
    const path = myURL.pathname;
    let filePath = './';

    if (path === '/') {
        filePath += 'index.html';
    } else if (path === '/about') {
        filePath += 'about.html';
    } else if (path === '/contact-me') {
        filePath += 'contact-me.html';
    } else {
        filePath += '404.html';
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    }
    );
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


