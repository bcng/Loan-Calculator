app.controller('MainCtrl', function($scope, bankService) {
    
    var getInterestInfo = function() {
        bankService.getBankData().then(function(response) {    
            $scope.interest_rate = response.rate;
        });
    }

    getInterestInfo();

    // Function to calculate total loan amount with interest
    // A = total amount owed with interest
    // P = principal
    // r = interest rate
    // t = times (in years)
    
    var totalAmount = function(P, r, t) {
    	return +P + +(P*r*t);	
    };
    
    $scope.calculatePayment = function() {
    	
    	var total = totalAmount($scope.principal, $scope.interest_rate, 4);
    	$scope.monthly_payment = (total/12).toFixed(2);
    	
    }
})

