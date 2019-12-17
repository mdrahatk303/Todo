const Task=require('../models/task');
console.log("Rahat router is loaded");

//Display TODO list
module.exports.show_todo=function(req,res)
{
  
    
    Task.find({},function(err,tasks)
    {
        if(err)
        {
            console.log('Error in fetching todo list from db');
            return;
        }
        return res.render('home',{title:"TODO App",todo_task:tasks});
    });

    
}


//Handle post request
module.exports.add_todo=function(req,res)
{

    //Adding the list
    Task.create({
        description: req.body.description,
        category:req.body.category,
        due_date:req.body.due_date
    },
    function(err,newtodo)
    {
        if(err)
        {
            console.log('error in creating a list!');
            return ;
        }
       //After adding refresh the same page and show the changes
        return res.redirect('back');
    });
}

//Handel delete request
module.exports.del_todo=function(req,res)
{
   
    //loop to get all id and delete over each iterations
    
    for(let i of Object.keys(req.body))
    {
    
        let id=req.body[i];
       // console.log(id);

    //find the note in the database using id and delete
        Task.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
                console.log('error in deleting an object from database');
                return;
            }
       
    });
    }
    return res.redirect('back');
};