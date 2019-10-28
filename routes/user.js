const express=require('express');
const router=express.Router();
const UserController=require('../controllers/user_controller');

router.get('/',UserController.user);
router.get('/play',UserController.play);
module.exports=router;