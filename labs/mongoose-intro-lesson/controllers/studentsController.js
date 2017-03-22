var Schema = require('../db/schema.js');
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

var studentsController = {
  index: function() {
    StudentModel.find({})
      .exec(function(err, docs) {
        if (err) {console.log(err);}

        docs.forEach(function(doc) {
          console.log(doc);
        });
      });
  },

  show: function(req) {
    StudentModel.findOne({name: req.name})
      .exec(function(err, docs) {
        console.log(docs);
      });
  },

  update: function(req, update) {
    StudentModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true})
      .exec(function(err, docs) {
        if (err) {console.log(err);}
        console.log(docs);
      });
  },

  destroy: function(req) {
    StudentModel.findOneAndRemove({name: req.name})
      .exec(function(err, docs) {
        if (err) {console.log(err);}
        console.log(docs);
      });
  }
};


studentsController.index();
console.log('listed full index');
studentsController.show({name: 'Becky'});
console.log('showed becky');
studentsController.destroy({name: 'Becky'});
console.log('hopefully destroyed Beckys dumb ass');
studentsController.index();
