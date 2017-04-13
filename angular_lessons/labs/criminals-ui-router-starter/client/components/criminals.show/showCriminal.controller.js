ShowCriminalController.$inject = ['CriminalsService', '$stateParams', '$state'];

function ShowCriminalController(CriminalsService, $stateParams, $state) {
    const vm = this;

    vm.current = {};

    activate();

    function activate() {
        loadCurrentCriminal();
    }

    function loadCurrentCriminal() {
        CriminalsService
            .loadCurrent($stateParams.criminalId)
            .then(function resolve(response) {
                vm.current = response.data.criminal;
                $state.go('show', {
                    criminalId: vm.current._id
                });
            });
    }
}

module.exports = ShowCriminalController;
