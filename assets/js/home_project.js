{
    let newProject = function(){

        //get the form in which we creating the project
        let newProjectForm = $('#create-project-form');

        newProjectForm.submit(function(e){
            e.preventDefault();

            //send an ajax request to our url newproject
            $.ajax({
               type: 'post',
               url: '/project/newproject',
               data: newProjectForm.serialize(),
               success: function(data){

                //give newProjectDom function the project as data that we want to add to dom
                let createproject = newProjectDom(data.data.project);

                //add that project to list of projects to our homepage
                $('#projectdetails').prepend(createproject);
                console.log(data);
                window.location.href = "/";
               }, error: function(error){
                console.log(error.responseText);
               }
            })
        })

    }

    //create function to add project to list
    let newProjectDom = function(project){
        return $(`<li id="projectdetails">

        <a href="/project/details/?id=${ project._id }&type=Get">
             
             <div id="projectname">
                 <h1>
                 ${ project.projectName }
                    
                 </h1>
                
             

             <div id="authorname">
               Author:- ${project.authorName}
             </div>

         </a>

         </li>
`)

    }

    newProject();

}