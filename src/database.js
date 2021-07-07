const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://roberto:Adosat2020@cluster0.pisul.mongodb.net/test?authSource=admin&replicaSet=atlas-4y161u-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));