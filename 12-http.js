const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Here is a short history');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Oops !!</h1> 
            <p>We can't find the page you're looking for</p>
            <a href="/">Back to Home</a>
        `);
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
