/**
 * Created by Atakan Arýkan on 07.11.2015.
 */
module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello, world!');
        }
    },
    {
        method: 'GET',
        path: '/user',
        handler: function (request, reply) {
            reply('Waa, user page!');
        }
    },
    {
        method: 'GET',
        path: '/user/{username}',
        handler: function (request, reply) {
            var userName = request.params["username"]; // param is for the data in url
            var replyMsg = "Hello, " + userName;
            reply(replyMsg);
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: function (request, reply) {
            var usermail = request.payload["usermail"];
            var password = request.payload["password"];
            if(!usermail || !password){ // payload is used for getting data out of request body
                reply("no mail or no password!");
            }
            // do lookup and shit and return
            reply('Hello, no-user-id!');
        }
    }

];
