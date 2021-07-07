const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://roberto:Adosat2020@cluster0.pisul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));