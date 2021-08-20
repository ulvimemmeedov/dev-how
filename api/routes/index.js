const { Router } = require('express');
const userController = require("../controller/user");
const postController = require("../controller/post");
const router = Router();
const userAuth = require('../middleware/auth');
const upload = require('../upload')

/** @User Routers. **/
router.get('/users/me/',userAuth,(req,res,next)=>{

  userController.GetMe(req,res,next)

});
/** @GetUserAll Routers. **/
router.get('/users/all',(req,res,next)=> {

  userController.GetAll(req, res, next);

});
/** @GetUserOne Routers. **/
router.get('/users/one/:username',(req,res,next)=> {

  userController.GetOne(req, res, next);

});
/** @CreateUser Routers. **/
router.post('/users/create',(req,res,next)=> {

  userController.Create(req, res, next);

});
/** @LoginUser Routers. **/
router.post('/users/login', (req, res,next) => {

  userController.UserLogin(req,res,next)

});
/* Post Routers. */
/* @getAllPosts Routers. */
router.get('/posts/all',(req,res,next)=>{

  postController.GetAll(req,res,next)

});
router.get('/posts/userpost/',(req,res,next)=>{

  postController.UserPost(req,res,next)

});
/* @getOnePost Routers. */
router.get('/posts/one/:id',(req,res,next)=>{

  postController.GetOne(req,res,next);

});
/* @CreatePost Routers. */
router.post('/posts/create',userAuth,upload.single('file'),(req,res,next)=>{

  postController.Create(req,res,next);

});
/* @LikePost Routers. */
router.post('/posts/like/:id',userAuth,(req,res,next)=>{

  postController.Like(req,res,next);

});
/* @DisLikePost Routers. */
router.post('/posts/dislike/:id',userAuth,(req,res,next)=>{

  postController.DisLike(req,res,next);

});
/* @DeletePost Routers. */
router.delete('/posts/delete/:id',userAuth,(req,res,next)=>{

  postController.Delete(req,res,next);

});

module.exports = router;
