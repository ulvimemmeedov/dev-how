const NotificationModel = require('../models/notifications');
const asyncHandler = require('express-async-handler')

class Notification {
    
    get = asyncHandler( async (author) => {

        const notifi = await NotificationModel.find({author:author});

        return notifi;

    })

    create = asyncHandler( async (data) =>{

        const newNotifi = await NotificationModel.create(data)
        
        return newNotifi;
        
    })


}

module.exports = Notification;