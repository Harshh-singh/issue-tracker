{
    let newProject = function(){

        let newProjectForm = $('#create-project-form');

        newProjectForm.submit(function(e){
            e.preventDefault();

            $.ajax({
               type: 'post',
               url: '/project/newproject',
               data: newProjectForm.serialize(),
               success: function(data){
                let createproject = newProjectDom(data.data.project);
                $('#projectdetails').prepend(createproject);
                console.log(data);

                window.location.href = "/";
               }, error: function(error){
                console.log(error.responseText);
               }
            })
        })

    }

    let newProjectDom = function(project){
        return $(`<li id="projectdetails">

        <a href="/project/details/?id=${ project._id }&type=Get">
             
             <div id="projectname">
                 <h1>
                 ${ project.projectName }
                    
                 </h1>
                
             

             <div id="authorname">
               Author:- 
             </div>

         </a>

         </li>
`)

    }

    newProject();

}