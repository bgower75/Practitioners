const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/testmongodatabase", {
  useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected!!!")
    
    var practitionersSchema = new mongoose.Schema ({
        name: String
    });
    
    var practitioner = mongoose.model('practitioner', practitionersSchema);
    
    var dentist = new practitioner({ name: 'Mr Dentist'});
    console.log(dentist.name);
})