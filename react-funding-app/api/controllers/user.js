// const config = require('../config/config');
// const utils = require('../utils');
// const User = require('../models/User');
// module.exports = {
//     get: {
//         // allUsers: (req, res, next) => {
//         // User.find()
//         //     .then((users) => {res.send(users)})
//         //     // .catch(next)
//         // },
//         oneUser: (req, res, next) => {
//             User.findById(req.params.id)
//                 .then((user) => {
//                     console.log(user);
//                     res.send(user);
//                 })
//                 // .catch(next)
//         }
//     },

//     post: {
//         register: async (req, res, next) => {
//             const {email, username, password } = req.body;
//             console.log(email, username,password);
//             //validate the entries here
//             let newUser = await User.create({email, username, password});
//             res.send(newUser);
//         },

//         login: (req, res, next) => {
//             const {email, password } = req.body;
//             User.findOne({email: email})
//                 .then((user) => Promise.all([user, user.matchPassword(password)]))
//                 .then(([user, match]) => {
//                     if (!match) {
//                         res.status(401).send('Invalid password');
//                         return;
//                     }
//                     console.log("logged In!")
//                     const token = utils.jwt.createToken({ id: user._id });
//                     res.cookie(config.authCookieName, token,{ maxAge: 900000, httpOnly: true })
//                     res.send({user,token});      
//                 })
//                 .catch(next);
//         },

//         logout: (req, res, next) => {
//             const incomingRequest = req.body;
//             const token = incomingRequest.body.tokenCookie;
//             console.log('-'.repeat(100));
//             console.log(token);
//             console.log('-'.repeat(100));
//             res.clearCookie('user').send('{"message":"Logout successfull!"}');
//         }
//     },

//     // put: (req, res, next) => {
//     //     const id = req.params.id;
//     //     const { username, password } = req.body;
//     //     User.update({ _id: id }, { username, password })
//     //         .then((updatedUser) => res.send(updatedUser))
//     //         .catch(next)
//     // },

//     // delete: (req, res, next) => {
//     //     const id = req.params.id;
//     //     User.deleteOne({ _id: id })
//     //         .then((removedUser) => res.send(removedUser))
//     //         .catch(next)
//     // }
// }