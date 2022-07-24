const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { String, Number, Boolean, ObjectId, Array } = Schema.Types;

const postSchema = new Schema({
    desc: {type: String},
    photo: {type: String}, //not required right now
    date: {type: String, default: '1 sec ago'},
    userid: {type: ObjectId, ref: 'users'},
    likes: {type: Number, default: 0},
    comments: {type: Number, default: 0},
})

postSchema.pre('save', function (next) {
    next();
});

module.exports = mongoose.model('posts', postSchema);

