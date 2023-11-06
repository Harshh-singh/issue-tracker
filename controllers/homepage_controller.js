const Project = require('../models/project_schema');

module.exports.home = async function(req,res){
    try{
     //use await to wait for the promise to resolve and find projects
    let projects = await Project.find({});

    return res.render('homepage', {
        title: 'Issue Tracker',
        project_List: projects
    });

    }catch(err){
        console.log(`Error in finding project: ${err}`);
        return;
    }
    
}