angular
    .module('criminals')
    .service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
    const self = this;

    // WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
    self.loadAll = loadAll;
    self.loadCurrent = loadCurrent;
		self.addCriminal = addCriminal;
    self.editCriminal = editCriminal;


    // HOW IT DOES STUFF
    function loadAll() {
        return $http.get('/api/criminals');
    }

    function loadCurrent(criminalId) {
        return $http.get('/api/criminals/' + criminalId);
    }

    function addCriminal(newCriminal) {
        return $http.post('api/criminals', newCriminal);
    }

    function editCriminal(editedCriminal) {
      return $http.patch('api/criminals/' + editedCriminal._id, editedCriminal);
    }
