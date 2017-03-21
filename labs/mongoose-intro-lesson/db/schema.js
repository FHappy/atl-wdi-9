var mongoose = require('mongoose');
// mongoose.connect('mongodb://admin:default@ds137340.mlab.com:37340/mongoose-intro-lab');

mongoose.connect('mongodb://localhost/students');
// to avoid mongoose's built in deprecation error
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', function(err) {
  console.log(err);
});

db.once('open', function() {
  console.log('database has been connected');
});

db.close();

var Schema = mongoose.Schema;


var ProjectSchema = new Schema({
  title: String,
  unit: String
});

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ProjectSchema]
});

// first argument is the singular name of the collection that your model is for
// mongoose automatically looks for teh plural version of your model name
var ProjectModel = mongoose.model('Project', ProjectSchema);
var StudentModel = mongoose.model('Student', StudentSchema);

var hassan = new StudentModel({name: 'Hassan', age: 26});
hassan.save(function(err, student) {
  if (err) {
    console.log(err);
  } else {
    console.log(student);
  }
});



module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};
