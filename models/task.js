const mongoose=require('mongoose');


//Schema consist of Description(String), category(String), due date(String)
const taskSchema=new mongoose.Schema(
    {
        description:{
            type:String,
            required:true
        },
        category: {
            type:String,
            required:true
        },
        due_date: {
            type:String,
            required:true
        }

    }
);

const Task=mongoose.model('task',taskSchema);

//Exporting Schema
module.exports=Task;