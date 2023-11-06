const mongoose = require('mongoose');

const projectschema = new mongoose.Schema({
    projectName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        require: true
    },
    authorName:{
        type: String,
        require: true
    },
});

const Project = mongoose.model('Project', projectschema);

module.exports = Project;