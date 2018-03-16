import openSocket from 'socket.io-client'

let socket = openSocket('https://crowdvoteserver.herokuapp.com');
let vote = {
    question: '',
    options: [],
    votes: [],
    joincode: ''
}
let creator = '';



function onCreate(newvote, callback) {
    vote = {
        question: newvote.question,
        options: newvote.options,
        votes: new Array(newvote.options.length+1).join('0').split('').map(parseFloat),
        joincode: ''
    }

    socket.emit('create', vote);
    socket.on('created', (v) => {
        vote = v;
        creator = vote.joincode;
        callback(null, vote.joincode);
    });
}

function onJoin(joincode, callback) {
    console.log(joincode)
    vote = {
        question: '',
        options: [],
        votes: [],
        joincode: joincode
    }

    socket.emit('join', vote.joincode);
    socket.on('joined', (v) => {
        vote = v;
        callback(null, vote.joincode);
    });
}

function onVote(index, callback) {
    socket.emit('vote', index);
    socket.on('votes', (v) => {
        vote = v;
        callback(null, vote);
    });
}

function readyForUpdates(callback) {
    socket.on('update', (newv) => {
        vote = newv;
        callback(null, vote);
    })
}


export {
    vote,
    creator,
    onCreate,
    onJoin,
    onVote,
    readyForUpdates
}