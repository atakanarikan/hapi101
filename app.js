/**
 * Created by Atakan Ar�kan on 07.11.2015.
 */
var Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: 'localhost', //hostname
    port: 7070 // port
});

var routes = require('./routes/frontend_routers.js'); // path to the routers for requests
// require dosyadan okumak i�in, exports diyince oradaki arrayi at�yor direk routes variable'�n�n i�ine
// bunu direk buraya da yazabilirdik, �u �ekilde:

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