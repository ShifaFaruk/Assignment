const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/restApi')
  .then(() => console.log('Connected!'));

const schema = mongoose.Schema

let userSchema = new schema({
    username:String,
    "roles":{
        type:schema.Types.ObjectId,
        ref:"role"
    }
})
const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel
