const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://roberto:<password>@cluster0.pisul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));