const mongoose = require('mongoose');

const projectschema = new mongoose.Schema({
    projectName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    authorName:{
        type: String,
        required: true
    },
    //add array of issues to project so that we can add multiple issues
    issue: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue',
    } ]
});

const Project = mongoose.model('Project', projectschema);

module.exports = Project;