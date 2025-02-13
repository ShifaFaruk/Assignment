const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nodefinalproject')
  .then(() => console.log('Connected!'));

  const schema = mongoose.Schema

let catSchema = new schema({
    catname:String
})
const CatModel = mongoose.model('category', catSchema);

module.exports = CatModel
