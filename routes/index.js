const express=require('express');
const router=express.Router();
console.log("Express router is loaded");

const UserController=require('../controllers/home_controller');

//get home page
router.get('/',UserController.show_todo);
//console.log("Express router is loaded");

//post request to add to do list
router.post('/todo_list',UserController.add_todo);

//deleting request
router.post('/delete',UserController.del_todo);
//Below this doesnot belong to todo

//user
// const user=require('../controllers/user_controller');
// router.get('/user',user.user);


module.exports=router;