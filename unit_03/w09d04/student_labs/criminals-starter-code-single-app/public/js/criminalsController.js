angular
  .module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
  var vm = this;

  vm.all = [];
  vm.loadingAll = true;
  vm.criminalToEdit = null;
  vm.addCriminal = addCriminal;
  vm.newCriminal = {};
  vm.showEditDiv = showEditDiv;
  vm.editCriminal = editCriminal;
  vm.deleteCriminal = deleteCriminal;

  activate();

  function activate() {
    $http
      .get('/criminals')
      .then(function resolve(response) {
        vm.all = response.data.criminals;
        vm.loadingAll = false;
      }, function reject(response) {
        console.log(response.message);
      });
  }

  function addCriminal() {
    vm.loadingAll = true;
    $http
      .post('/criminals', vm.newCriminal)
      .then(function resolve(response) {
        vm.all.push(response.data.criminal);
        vm.newCriminal = {};
        vm.loadingAll = false;
      }, function reject(response) {
        console.log(response.data.message);
      });
  }

  function showEditDiv(criminal) {
    vm.criminalToEdit = criminal;
  }

  function editCriminal(criminal) {
    vm.loadingAll = true;
    $http
      .patch('/criminals/' + criminal._id, criminal)
      .then(function resolve(response) {
        console.log(response.data.message);
        vm.criminalToEdit = null;
        vm.loadingAll = false;
      }, function reject(response) {
        console.log(response.data.message);
      });
  }

  function deleteCriminal(criminal) {
    vm.loadingAll = true;
    $http
      .delete('/criminals/' + criminal._id)
      .then(function resolve(response) {
        console.log(response.data.message);
        vm.all = vm.all.filter(x => x != criminal);
        vm.loadingAll = false;
      }, function reject(response) {
        console.log(response.data.message);
      });
  }

}
