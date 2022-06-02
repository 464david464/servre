const http = require('http');
const fs = require('fs');

const readFn = require('./api/read');
const createFn = require('./api/create');
const updateFn = require('./api/update');
const deleFn = require('./api/delete');

const server = http.createServer(async (req, res) => {
    const { url, method } = req;

    switch (url) {

        //Loading Pages
        case '/':
            fs.createReadStream('./views/home/index.html').pipe(res);
            break;
        case '/index.js':
            fs.createReadStream('./views/home/index.js').pipe(res);
            break;
            case '/index.css':
            fs.createReadStream('./views/home/index.css').pipe(res);
            break;

            case '/create':
            fs.createReadStream('./views/create/create.html').pipe(res);
            break;
            case '/create.js':
            fs.createReadStream('./views/create/create.js').pipe(res);
            break;
            case '/create.css':
            fs.createReadStream('./views/create/create.css').pipe(res);
            break;

            case '/read':
            fs.createReadStream('./views/read/read.html').pipe(res);
            break;
            case '/read.js':
            fs.createReadStream('./views/read/read.js').pipe(res);
            break;
            case '/read.css':
            fs.createReadStream('./views/read/read.css').pipe(res);
            break;

            case '/update':
            fs.createReadStream('./views/update/update.html').pipe(res);
            break;
            case '/update.js':
            fs.createReadStream('./views/update/update.js').pipe(res);
            break;
            case '/update.css':
            fs.createReadStream('./views/update/update.css').pipe(res);
            break;

            case '/delete':
            fs.createReadStream('./views/delete/delete.html').pipe(res);
            break;
            case '/delete.js':
            fs.createReadStream('./views/delete/delete.js').pipe(res);
            break;
            case '/delete.css':
            fs.createReadStream('./views/delete/delete.css').pipe(res);
            break;

            

            
            //API Operation
            case '/api/student':
                if(method === 'GET') {
                    const students = readFn();
                    res.end( JSON.stringify( students ));
                } 
                
                else if(method === 'POST') {
                    const buffer = [];
                    for await(const chunk of req) {
                        buffer.push(chunk)
                    }
                    const data = Buffer.concat(buffer).toString();
                    const students = JSON.parse(data);
                    const createRes = createFn(students);
                    console.log(createRes);
                    res.end(JSON.stringify(createRes));
                }
                
                else if(method === 'PUT') {
                    const buffer = [];
                    for await(const chunk of req) {
                        buffer.push(chunk)
                    }
                    const data = Buffer.concat(buffer).toString();
                    const students = JSON.parse(data);
                    const resUpdate = updateFn(students)
                    res.end(JSON.stringify(resUpdate))
                    
                } 
                
                else if(method === 'DELETE') {
                    const buffer = [];
                    for await(const chunk of req) {
                        buffer.push(chunk)
                    }
                    const data = Buffer.concat(buffer).toString();
                    const students = JSON.parse(data);
                    const deleteRes = deleFn(students)
                    res.end(JSON.stringify(deleteRes))
                }
                break;

        default:
            fs.createReadStream('./views/404/404.html').pipe(res);
            break;
        
    }
      
});

server.listen(7575);

console.log('server listening on 7575');