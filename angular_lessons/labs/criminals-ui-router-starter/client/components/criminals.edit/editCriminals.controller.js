EditCriminalsController.$inject = ['CriminalsService', '$state', '$stateParams'];

function EditCriminalsController(CriminalsService, $state, $stateParams) {
    var self = this;
    self.editCriminal = editCriminal;
    self.criminalEdit = {};

    activate();
    function activate() {
      CriminalsService.loadCurrent($stateParams.criminalId)
      .then(function resolve(response) {
        self.criminalEdit = response.data.criminal;
      });
    }
    function editCriminal() {
        CriminalsService
            .editCriminal(self.criminalEdit)
            .then(function resolve() {
                $state.go('criminals');
            });
    }
}

module.exports = EditCriminalsController;
