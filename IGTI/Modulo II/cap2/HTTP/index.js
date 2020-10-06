import http from 'http';

http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/teste'){
        res.write('GET/teste -> Foi executado com sucesso!');
        res.statusCode = 200;
        
    } else{
        res.write('Hello, World! I\'m here!');
        res.statusCode = 200;
        
    }
    res.end();
}).listen(8080);

