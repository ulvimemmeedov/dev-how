const { Schema, connection } = require('../helpers/modelHelper');

const UsersSchema = new Schema({
  name: { type:String,required:[true, 'Ad xanası məcburidir'] },
  username: { type:String, unique: true, required:[true, 'İstifadəçi xanası məcburidir'] },
  email:{ type:String, unique: true, required:[true, 'Email xanası məcburidir'] },
  password:{ type:String, required:[true, 'Şifrə xanası məcburidir'] , minlength:9},
  profilePic:{type:String},
})

const UsersModel = connection.model('Users',UsersSchema);

module.exports = UsersModel;
