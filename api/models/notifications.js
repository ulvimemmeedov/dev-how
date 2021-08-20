const { Schema, connection } = require('../helpers/modelHelper');

   const NotificationSchema = new Schema({
    title: { type: String },
    author: { type: String },
    des: { type: String },
    createdAt: { type: Date, default: Date.now() },
    status: { type:Boolean , default: 1 },
 
  })

const NotificationModel = connection.model('Notification', NotificationSchema);

module.exports = NotificationModel;
