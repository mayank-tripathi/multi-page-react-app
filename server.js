const express = require('express')
const path = require('path')
const request = require('request');

const app = express()
const port = 8080;

const _map = require('./maps/urlmap.json');

const options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

const serveFile = (res, next, fileName) => {
    
    if(typeof fileName === "string" && fileName !== "")
    {
        res.sendFile(fileName, options, function (err) {
            if (err) {
                next(err);
            } else {
                console.log('Served: ', fileName);
            }
        });
    }
    else
    {
        res.sendStatus(404);
    }
    
}

app.use(express.static(path.join(__dirname, '/')))

app.post('/', function (req, res) {
    res.send('Got a POST request')
});

app.get(/(((\/)([a-z]|[A-Z]|[0-9])+)+)|(\/)/, function (req, res, next) {
     var fileName = req.params[0] || "/";

     if(typeof _map[fileName] === "object" && _map[fileName]['type'] === "api" && typeof _map[fileName]['url'] === "string" && _map[fileName]['url'] !== "")
     {
        request(_map[fileName], function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            }
        })
     }
     else if(typeof _map[fileName] === "object" && _map[fileName]['type'] === "page" && typeof _map[fileName]['url'] === "string" && _map[fileName]['url'] !== "")
     {
        serveFile(res, next, _map[fileName]['url']);
     }
     else
     {
        res.sendStatus(500);
     }

});

app.listen(port, function () {
    console.log("-- Listening on " + port + "\n\n");
});