const mongoose = required('mongoose');

const {Schema} = mongoose;

const commentSchema = new Schema({
      content: {type: String, require: true},
      blog: {type: mongoose.SchemaTypes.ObjectId, ref: 'blogs'},
      author: {type: mongoose.SchemaTypes.ObjectId, ref: 'users'}

}, 
         {timestams: true}
);

module.exports = mongoose.model('Comment', commentSchema, 'comments')