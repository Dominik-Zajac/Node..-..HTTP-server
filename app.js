const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    })
    switch (req.url) {
        case '/':
            res.end('<h1>Strona glowna</h1>');
            break;
        case '/users':
            res.end('<h1>Strona uzytkownikow</h1>');
            break;
        case '/api/users':
            res.end('<h1>API</h1>');
            break;
        default:
            res.end('<h1>Strona nie istnieje</h1>')
    }

}).listen(port, '127.0.0.1', () => {
    console.log(`Nasluchuje na porcie ${port}`);
})