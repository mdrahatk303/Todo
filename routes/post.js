const express=require('express');
const router=express.Router();
const PostController=require('../controllers/post_controller');

router.get('/',PostController.post);
router.get('/posted',PostController.posted);
module.exports=router;