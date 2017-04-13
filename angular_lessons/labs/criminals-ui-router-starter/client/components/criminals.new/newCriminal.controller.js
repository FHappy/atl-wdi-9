NewCriminalController.$inject = ['CriminalsService', '$state'];

function NewCriminalController(CriminalsService, $state) {
  var self = this;
  self.addCriminal = addCriminal;
  self.newCriminal = {};

  function addCriminal() {
    CriminalsService
      .addCriminal(self.newCriminal)
      .then(function resolve(response) {
          console.log(response.data.criminal);
          $state.go('criminals');
      });
  }
}

module.exports = NewCriminalController;
