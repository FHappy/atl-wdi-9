CriminalsController.$inject = ['CriminalsService', '$stateParams'];

function CriminalsController(CriminalsService, $stateParams) {
    const vm = this;

    // WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
    vm.criminals = [];
    vm.loading = true;
    vm.showCriminal = {};

    // activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
    activate();

    function activate() {
        loadAllCriminals();
    }


    // HOW IT DOES STUFF
    function loadAllCriminals() {
        CriminalsService
            .loadAll()
            .then(function resolve(response) {
                vm.criminals = response.data.criminals;
                vm.loading = false;
            });
    }

}

module.exports = CriminalsController;
