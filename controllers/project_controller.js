const Project = require("../models/project_schema");

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
       authorName: req.body.author
    });


    return res.redirect('/');

  }catch(err){
    console.log(`Error in creating project: ${err}`);
  }

}

