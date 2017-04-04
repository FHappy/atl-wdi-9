angular
  .module('InfamousCriminals')
  .service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
    this.getCriminals = getCriminals;
    this.addCriminal = addCriminal;
    this.deleteCriminal = deleteCriminal;

    function getCriminals() {
        return $http
            .get('/criminals')
            .then(function resolve(response) {
                return response.data.criminals;
            });
    }

    function addCriminal(criminal) {
        return $http
            .post('/criminals', criminal)
            .then(function resolve(response) {
                    console.log(response.data.message);
                }, function reject(response) {
                    console.log(response.data.message);
                });
            }

    function deleteCriminal(criminal) {
        return $http
            .delete('/criminals/' + criminal._id)
            .then(function resolve(response) {
              console.log(self.all);
            }, function reject(response) {
              console.log(response.data.message);
            });
    }

}
