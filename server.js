//const express = require('express');
const io = require('socket.io')();

const port = 8000;

let rooms = [];
let votes = [];

makeid = (len) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
// let app = express();

// app.use(express.static('./public'));

// app.listen(8000);
// console.log("Server running on port 3000");


io.on('connection', (client) => {
    // here you can start emitting events to the client 
    client.on('create', (vote) => {
        let code = makeid(4);
        while(rooms.indexOf(code) !== -1){
            code = makeid(4);
        }
        vote.joincode = code;

        rooms.push(code);
        votes.push(vote);

        client.join(code);
        client.emit('created', vote);
        client.creator = code;
    });

    client.on('join', (joincode) => {
        if(rooms.indexOf(joincode) != -1){
            let roomvote = votes[rooms.indexOf(joincode)];
            client.join(joincode, () => {
                client.emit('joined', roomvote);
            });
            
        }
    });

    client.on('vote', (index) => {
        let roomnum = Object.keys(client.rooms)[1];

        votes[rooms.indexOf(roomnum)].votes[index]++;
        let current = votes[rooms.indexOf(roomnum)];
        
        client.emit('votes', current);
        client.to(roomnum).emit('update', current);
    })
});

io.listen(port);
console.log("Server running on port ", port);