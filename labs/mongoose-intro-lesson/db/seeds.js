var mongoose = require('mongoose');
var Schema = require('./schema.js');

var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

StudentModel.remove({}, function(err) {
  console.log(err);
});

ProjectModel.remove({}, function(err) {
  console.log(err);
});

var anna = new StudentModel({name: 'Anna', age: 35});
var matt = new StudentModel({name: 'Matthew', age: 29});
var becky = new StudentModel({name: 'Becky', age: 24});

var project1 = new ProjectModel({title: 'shutting the hell up', unit: 'DUMFUK'});
var project2 = new ProjectModel({title: 'being ugly', unit: 'Life'});
var project3 = new ProjectModel({title: 'being basic', unit: 'Life'});
var project4 = new ProjectModel({title: 'being silly', unit: 'JS'});


var students = [anna, matt, becky];
var projects = [project1, project2, project3, project4];

students.forEach(function(student, i) {
  student.projects.push(projects[i], projects[i + 1]);

  student.save(function(err) {
    if (err) {console.log(err);}

    else {console.log(student);}
  })
})
