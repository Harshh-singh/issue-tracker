const mongoose = require('mongoose');

const issueschema = new mongoose.Schema({

    issue_title: {
        type:String,
        required:true
    },
    issue_description:{
        type: String,
        required: true
    },
    issue_authorName:{
        type: String,
        required: true
    },
    project_id:{
        type: String,
        required: true
    },
});

const Issue = mongoose.model('Issue', issueschema);

module.exports = Issue;