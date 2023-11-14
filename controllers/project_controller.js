const { title } = require("process");
const Project = require("../models/project_schema");
const Issue = require("../models/issue_schema");

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
       issue: req.body.issue
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
    project_details: project,
    project_id: projectid,
   })
  }catch(err){
    console.log(`Error in getting project: ${err}`);

    return res.status(500).json({error: 'An error occurred while retrieving project details'})
  }
}

module.exports.createissue = async function(req,res){

  project_id = req.query.id;

  return res.render('create_issue', {
    title: 'New Issue',
    projectid: project_id,
  })
  
}

module.exports.newIssue = async function(req,res){

  projectId = req.query.id;

try{
  let newIssue = await Issue.create({
    issue_title: req.body.title,
    issue_description: req.body.description,
    issue_authorName: req.body.author,
    project_id: projectId,
  });

  //updating the project to add issue


  //search for the project and update it
  const project = await Project.findOneAndUpdate(

    {_id: projectId},
    {$push: {issue:newIssue}},
    {new: true},

  ).populate('issue');

  if(!project){
    return res.status(404).json({ message: 'Project not found' });
  }

  return res.redirect(`/project/details/?id=${projectId}&type=Get`);

}catch(err){
  console.log(`Error in creating Issue: ${err}`);
}
}
