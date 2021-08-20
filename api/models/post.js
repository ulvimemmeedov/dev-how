const { Schema, connection } = require('../helpers/modelHelper');

   const PostSchema = new Schema({
    title: { type: String, required: [true, 'Ad xanası məcburidir'] },
    author: { type: String },
    des: { type: String },
    createdAt: { type: Date, default: Date.now() },
    like: { type: Array },
    disLike: { type: Array },
    img:{type:String}
 
  })

const PostModel = connection.model('Post', PostSchema);

module.exports = PostModel;
