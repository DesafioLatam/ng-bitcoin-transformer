angular.module('app')
.controller('BitController', 
	['$scope', '$http', '$location', 'BitcoinApiCall', 
	function ($scope, $http, $location, BitcoinApiCall) {
		$scope.bitcoins = 1;
		$scope.exchangeBitcoins = function(method)
		{
			BitcoinApiCall.getExchangePrices(method, $scope.bitcoins).then(function(http_object){
				console.log(http_object);	
		      	$scope.dollars = http_object.data.amount;
	      }).catch(function(e){console.log(e)});
		}


	}]);
