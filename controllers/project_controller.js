const { title } = require("process");
const Project = require("../models/project_schema");
const Issue = require('../models/issue_schema');

module.exports.create = async function(req,res){

    return res.render('create_project',{
        title: 'Create-Project'
    })
}

module.exports.newproject = async function(req,res){

  try{
    let newProject = await Project.create({
       projectName: req.body.projectName,
       description: req.body.description,
       authorName: req.body.author,
    });

    if(req.xhr){
      return res.status(200).json({
        data:{
          project: newProject
        },
        message: "Post created!"
      });

    }

    

  }catch(err){
    console.log(`Error in creating project: ${err}`);
  }

}

module.exports.details = async function(req,res){

  try{

    const projectid = req.query.id;

    const project = await Project.findById(projectid);

    if(!project){
      return res.status(404).json({error:'Project not found'});
    }

   return res.render('project_details', {
    title: 'Project',
    project_details: project
   })
  }catch(err){
    console.log(`Error in getting project: ${err}`);

    return res.status(500).json({error: 'An error occurred while retrieving project details'})
  }
}

module.exports.createissue = async function(req,res){

  return res.render('create_issue', {
    title: 'New Issue',
  })
  
}

module.exports.newIssue = async function(req,res){

try{
  let newIssue = await Issue.create({

    issue_title: req.body.title,
    issue_description: req.body.description,
    issue_authorName: req.body.author,
  })
  return res.redirect('/');

}catch(err){
  console.log(`Error in creating Issue: ${err}`);
}
}
