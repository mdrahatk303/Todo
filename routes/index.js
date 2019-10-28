const express=require('express');
const router=express.Router();
console.log("Express router is loaded");
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home1);
router.get('/home1',homeController.home1);
router.use('/user',require('./user'));
router.use('/post',require('./post'));
module.exports=router;