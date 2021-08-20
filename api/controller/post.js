'use stick'
const PostModel = require('../models/post');
const asyncHandler = require('express-async-handler')
const cloudinary = require('cloudinary').v2;
const UsersModel = require('../models/user');
const fs = require('fs');

cloudinary.config({
    cloud_name: 'dz1rdfblc',
    api_key: '547798471512384',
    api_secret: 'ktnRIocfSPHFb89uzqVeeM9rof8',
    secure: true
});

/** @PostController **/
class PostController {
    UserPost = asyncHandler(async (req, res) => {
        const author = req.query.username;

        if(!author.length){

            return res.status(200).json({

                error: { message: 'Xeta' }

            });

        };
        const post = await PostModel.find({author:author});
        
        if (!post) {

            return res.status(500).json({

                error: { message: 'Server Xetası!' }

            });

        };
        
        res.status(200).json({ post: post });
    
    });
    /** @GetAll Post **/
    GetAll = asyncHandler(async (req, res) => {
        const post = await PostModel.find();
        
        if (!post) {

            return res.status(500).json({

                error: { message: 'Server Xetası!' }

            });

        };
        
        res.status(200).json({ post: post });
    
    });

    /** @GetOne Post **/
    GetOne = asyncHandler(async (req, res) => {
        const { id } = req.params;

        const post = await PostModel.findById({ _id: id });

        if (!post) {

            return res.status(404).json({

                error: { message: 'Post Tapılmadı!' }

            });
        };

        res.status(200).json({ post: post });

    });

    /** @Create Post **/
    Create = asyncHandler(async (req, res) => {
        var img, author,imgPath;
        const { title, des } = req.body;

        const userId = req.user.id;

        if (userId) {
            const user = await UsersModel.findById({_id:userId});
            author = user.username;
        } 

        if(!author.length){

            return res.status(200).json({

                error: { message: 'Xeta' }

            });

        };
        if (!title || !des) {
            
            return res.status(200).json({
                error: { message: 'Baslıq xanasını düzgün doldurun' }
            });
        
        };

        if(req.file){

            imgPath = req.file.path; 
            if (imgPath.length) {
                try {
                    await cloudinary.uploader.upload(imgPath, { tags: 'basic_sample' }, function (err, image) {
                        
                        setTimeout(() => {
    
                            fs.unlinkSync(imgPath);
                        
                        }, 3000);
    
                        img = image.url;
    
                    });
    
                } catch (error) {
    
                    return res.status(200).json({
                        error: { message: error }
                    });
                
                };
            };
        }
        
        const post = await PostModel.create({
            title,
            author,
            des,
            img:'/static/default.png'
        });
        if (!post) {

            return res.status(500).json({
                error: { message: 'Server Xetası!' }

            });
        };

        res.status(200).json({ message: 'Uğurla post yaradıldı', post: post });
    
    });

    /** @Delete Post **/
    Delete = asyncHandler(async (req, res) => {

        const { postId,userId } = req.params;
    
        const user = await UsersModel.findById({_id:userId});
    
        const post = await PostModel.findById({ _id: postId });

        if (!user) {
            
          return res.json({

                      error: { message: 'Istifadəçi Mövcud deyil' }

          });

        };
        if (!post) {

           return res.json({

                      error: { message: 'Post Movcud deyil' }

           });
        };
        if (user.username === post.author) {
            
            await PostModel.findByIdAndDelete({ _id: id })

            res.status(200).json({ message: 'Uğurla post silindi', post: post });

        };
        
        res.status(200).json({ message: 'ERROR'});
    
    });

    /** @like Post **/
    Like = asyncHandler(async (req, res) => {

        const { userId, postId } = req.body;

        const post = await PostModel.findById({ _id: postId });

        if (!post) {
            res.json({

                error: { message: 'Post Movcud deyil' }

            });
        };
        const checkDiskLike = post.disLike.find(item => {

            return item = userId;

        });
        const checkLike = post.like.find(item => {

            return item = userId;

        });
        if (checkLike) {

            res.json({

                error: { message: 'Post Like edilib' }

            });

        };
        if (checkDiskLike) {

            post.disLike.remove(checkDiskLike)

        };

        post.like.push(userId);

        await post.save();

        res.status(200).json({ message: 'success', Like: post.like.length });
    
    });

    /** @Dislike Post **/
    DisLike = asyncHandler(async (req, res) => {
        const { userId, postId } = req.body;

        const post = await PostModel.findById({ _id: postId });

        if (!post) {

            res.json({

                error: { message: 'Post Movcud deyil' }

            });
        };
        const checkDiskLike = post.disLike.find(item => {

            return item = userId;

        });
        const checkLike = post.like.find(item => {

            return item = userId;

        });
        if (checkDiskLike) {

            res.json({

                error: { message: 'Post DiLike edilib' }

            });

        };
        if (checkLike) {

            post.like.remove(checkLike);

        };
        post.disLike.push(userId);

        await post.save();

        res.status(200).json({ message: 'success', DisLike: post.disLike.length });

    });
}

module.exports = postController = new PostController();
