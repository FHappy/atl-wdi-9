angular
  .module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);
  // .service('CriminalsService', CriminalsService);

// CriminalsService.$inject = ['$http'];

CriminalsController.$inject = ['CriminalsService'];



function CriminalsController(CriminalsService){
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  getCriminals();
  function getCriminals(){
    CriminalsService.getCriminals()
      .then(function resolve(response) {
        self.all = response;
      }, function reject(response) {
        console.log(response.data.message);
      });
  }

  function addCriminal(){
    CriminalsService.addCriminal(self.newCriminal)
      .then(function(response) {
        getCriminals();
        self.newCriminal = {};
      });
  }

  function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal)
      .then(function() {
        console.log('successfully deleted');
        self.all = self.all.filter(x => x != criminal);
      });
  }

}
