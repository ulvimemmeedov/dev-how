const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,__dirname + '/public/')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now()+'.img')
    }
  })
   
const upload = multer({ storage: storage })
  
module.exports = upload