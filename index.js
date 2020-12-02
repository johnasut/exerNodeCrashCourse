// console.log('Hello from node.js');

// ** Example 1
// const person = require('./person');

// console.log(person);
// console.log(person.name);

// ** Example 2
// const Person = require('./person');

// const person1 = new Person('Mary Worth', 45);

// person1.greeting();

// ** won't work:
// import Person from './person';



// ** Logger example

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listener', data));

// logger.log('Goodbye Cruel World');
// logger.log("I'm Batman");
// logger.log('Where in the world is Carmen Sandiego');


// ** HTML example

// Using express & similar makes stuff easier
// app.get('/about', function...)

const http = require('http');
const path = require('path');
const fs = require('fs');
const { join } = require('path');

const server = http.createServer((req, res) => {
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     })
    // }

    // if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     })
    // }

    // if(req.url === '/api/users') {
    //     const users = [
    //         { name: 'Michael Jordan', age: 55 },
    //         { name: 'Bob Sagat', age: 25 }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    // Build a dynamic file path
    let filePath = path.join(
        __dirname, 
        'public', 
        req.url === '/' ? 'index.html' : req.url
    );

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read a File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code =='ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                // Likely a server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success!
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));