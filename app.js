const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        res.end('<h1>Strona glowna</h1>')
    } else if (req.url === '/users') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        res.end('<h1>Strona uzytkownikow</h1>');
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        res.end('<h1>Brak strony o podanym adresie</h1>');
    }
}).listen(port, '127.0.0.1', () => {
    console.log(`Nasluchuje na porcie ${port}`);
})