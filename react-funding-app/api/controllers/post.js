// const Post = require('../models/Post');
// module.exports = {
//     get: {
//         allPosts: (req, res, next) => {        
//             Post.find().then((postList) => {res.send(postList)});
//         },
//         onePost: (req, res, next) => { 
//             let id = req.params._id;
//             Post.findOne({id}).then((post) => {res.send(post)});
//         },
//     },
//     post: {
//         makeNewPost: async (req, res, next) => {
//             const postDesc= req.body.postDesc;
//             const userCookie = req.body.userCookie;
//             const postPhoto = req.body.postPhoto;
//             //validate the entries here
//             let newPost;
            
//             newPost = await Post.create({
//                 desc: postDesc,
//                 userid: userCookie._id,
//                 photo: postPhoto
//             });

            
//             console.log(newPost);
//             res.send(newPost);
//         },

//         like: (req, res, next) => {
//             const id = req.params.id;
//             const {likes} = req.body;
//             console.log(req.body);
//             Post.findByIdAndUpdate(id, {likes})
//             .then((updatedPost) => {console.log(updatedPost); res.send(updatedPost)})
//             .catch(next)
//         }

//         // logout: (req, res, next) => {
//         //     const headerToken = req.headers.authorization.split(' ')[1]
//         //     const token = req.cookies[config.authCookieName] || headerToken;
//         //     console.log(req.cookies)
//         //     console.log('-'.repeat(100));
//         //     console.log(token);
//         //     console.log('-'.repeat(100));
//         //     models.TokenBlacklist.create({ token })
//         //         .then(() => {
//         //             res.clearCookie(config.authCookieName).send('{"message":"Logout successfully!"}');
//         //         })
//         //         .catch(next);
//         // }
//     },

//     delete: (req, res, next) => {
//         const id = req.params.id;
//         Post.deleteOne({ _id: id })
//             .then((removedUser) => res.send(removedUser))
//             .catch(next)
//     }
// }