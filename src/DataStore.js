 let vote = {
     question: '',
     options: [],
     votes: [],
     roomcode: ''
 }

module.exports = {
    onCreate: function(newvote) {
        console.log(newvote)
        console.log("testingthisth");
        vote.question = newvote.question;
        vote.options = newvote.options;

        //CREATE SOCKET!!!!! :D
    },

    onJoin: () => {

        //JOIN SOCKET!!!

    }
}