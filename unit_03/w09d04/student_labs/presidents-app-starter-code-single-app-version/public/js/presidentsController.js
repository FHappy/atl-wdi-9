angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];



function PresidentsController($http){
  var vm = this;

  vm.loadingAll = true;
  vm.presidentToEdit = null;
  vm.addPresident = addPresident;
  vm.showEditForm = showEditForm;
  vm.editPresident = editPresident;
  vm.all = [];
  vm.newPresident = {};
  vm.deletePresident = deletePresident;

  activate();

  function activate() {
    $http
      .get('/presidents')
      .then(function setAll(response) {
        vm.all = response.data.presidents;
        vm.loadingAll = false;
      });
  }

  function addPresident() {
    vm.loadingAll = true;
    $http
      .post('/presidents', vm.newPresident)
      .then(function resolve(response) {
        vm.all.push(response.data.president);
        vm.newPresident = {};
        vm.loadingAll = false;
      }, function reject(response) {
        console.log(response.message);
      });
  }

  function showEditForm(president) {
    console.log(president);
    vm.presidentToEdit = president;
  }

  function editPresident(president) {
    vm.loadingAll = true;
    $http
      .patch('/presidents/' + president._id, president)
      .then(function resolve(response) {
        console.log(response.message);
        vm.presidentToEdit = null;
        vm.loadingAll = false;
      }, function reject(response) {
        console.log(response.message);
      });
  }

  function deletePresident(president) {
    vm.loadingAll = true;
    $http
      .delete('/presidents/' + president._id)
      .then(function resolve(response) {
        console.log(response.message);
        vm.all = vm.all.filter(x => x != president);
        vm.loadingAll = false;
      }, function reject(response) {
        console.log(response.message);
      });
  }
}
