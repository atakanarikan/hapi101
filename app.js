/**
 * Created by Atakan Arýkan on 07.11.2015.
 */
var Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: 'localhost', //hostname
    port: 7070 // port
});

var routes = require('./routes/frontend_routers.js'); // path to the routers for requests
// require dosyadan okumak için, exports diyince oradaki arrayi atýyor direk routes variable'ýnýn içine
// bunu direk buraya da yazabilirdik, þu þekilde:

/*
 server.route({
 method: 'GET',
 path:'/hello',
 handler: function (request, reply) {

 return reply('hello world');
 }
 });
 */
server.route(routes); // connect the server with the routes

server.start(function () {
    console.log('Server is live at: ', server.info.uri);
});