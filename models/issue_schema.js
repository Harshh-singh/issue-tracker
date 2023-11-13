const mongoose = require('mongoose');

const issueschema = new mongoose.Schema({

    issue_title:{
        type:String,
        require:true
    },
    issue_description:{
        type: String,
        require: true
    },
    issue_authorName:{
        type: String,
        require: true
    },
});

const Issue = mongoose.model('issue', issueschema);

module.exports = Issue;