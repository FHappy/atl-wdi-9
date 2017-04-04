angular
  .module('WorldBankApp', [])
  .controller('WorldBankController', WorldBankController);

WorldBankController.$inject = ['$http'];

function WorldBankController($http) {
  var vm = this;
  vm.all = [];
  vm.loadingAll = true;
  vm.newRecord = {};
  activate();

  function activate() {
    $http
      .get('/wbinfo')
      .then(function resolve(response) {
        vm.all.push(response.data.records);
        vm.loadingAll = false;
      }, function reject(response) {
        console.log(response.data.message);
      });
  }



}
