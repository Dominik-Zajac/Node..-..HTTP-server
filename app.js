const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const users = [{
        id: 1,
        name: 'Adam'
    },
    {
        id: 2,
        name: 'Ewa'
    }
]

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    })
    switch (req.url) {
        case '/':
            fs.readFile(path.join(__dirname, 'index.html'), (err, page) => {
                if (err) res.end('<h1>Nie udalo sie pobrac pliku</h1>');
                else res.end(page);
            })
            break;
        case '/users':
            fs.readFile(path.join(__dirname, 'users.html'), (err, page) => {
                if (err) res.end('<h1>Nie udalo sie pobrac pliku</h1>');
                else res.end(page);
            })
            break;
        case '/api/users':
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            })
            const usersJSON = JSON.stringify(users);

            res.end(usersJSON);
            break;
        default:
            res.end('<h1>Strona nie istnieje</h1>')
    }

}).listen(port, '127.0.0.1', () => {
    console.log(`Nasluchuje na porcie ${port}`);
})