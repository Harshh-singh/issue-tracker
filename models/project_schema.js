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
    issue: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue',
    } ]
});

const Project = mongoose.model('Project', projectschema);

module.exports = Project;