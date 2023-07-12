const express = require('express');

const app = express();

const fs = require("fs");

var expressWs = require('express-ws')(app);
var aWss = expressWs.getWss('/');

app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    return next();
  });
  
  app.get('/', function(req, res, next){
    console.log('get route', req.testing);
    res.end();
  });
  
  app.ws('/', function(ws, req) {

    ws.on('message', function(msg) {
        message = JSON.parse(msg);

         if(typeof message.data !== "undefined"){   
            console.log("message.data is defined")
            console.log(message);
            aWss.clients.forEach(function (client) {
                message = JSON.stringify(message);
                client.send(message);
                /* console.log(ws._socket.remoteAddress); */
                console.log("message sent to client:");
                /* console.log(message.data.frame); */
              });

        } else {
            console.log("message data undefined"); 
            //console.log(message); 
        }
        

        
        /* aWss.clients.forEach(function (client) {
            client.send(msg.data);
            console.log(ws._socket.remoteAddress);
            console.log("message sent to client");
          }); */

          //console.log(expressWs.getWss().clients);
        //const buffer = Buffer.from(frame, "base64");
        //console.log(buffer);  
        //fs.writeFileSync('image.jpg', buffer);
      });
    
    console.log('socket', req.testing);

  });


  
  app.listen(8080);



/* const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 },()=>{
    console.log('server started');
});

wss.on('connection', function connection(ws) {
    console.log("someone connected");
    ws.on('message', (data) => {
        console.log('data received ' + data);
    });
});

wss.on('listening', ()=>{
    console.log('listening on 8080');
}); */


/* const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:8080']
    }
}); */
/* 
const app = express(),
    port = 3080;

    const users = []; */

/* app.get('/api/test', (req, res) => {
        console.log('test is visited!');
        res.json(users);
})

app.get('/', (req, res) => {
    console.log('webpage visited');
}) */

/* const users = [];

app.get('/api/test', (req, res) => {
    console.log('test is visited!');
    res.json(users);
})

app.get('/', (req, res) => {
    console.log('webpage visited');
    res.send('<h1>Hey Socket.io</h1>');
})
 */
/* io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('message', (data) => {
        console.log('data received: ' + data);
        socket.send(data);
    })
}); */

/* app.listen(port, () => {
    console.log('Server listening on the port: ' + port);
}); */

/* http.listen(3080, () => {
    console.log('listening http on 3080');
})
 */
/* const http = require('http').createServer(app);  */