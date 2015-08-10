app.service('bankService', function($http, $q) {
    
    this.getBankData = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:8899/api/interest_rate'
        }).then(function(response) {
            deferred.resolve(response.data);
        }, function(error) {
            console.log("error: " + error)
        });
        return deferred.promise;
    };

});
