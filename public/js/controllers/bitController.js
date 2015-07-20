angular.module('app')
	.controller('BitController', 
		['$scope', '$http', '$location', 'BitcoinApiCall', 
		function ($scope, $http, $location, BitcoinApiCall) {
			self = this;
			$scope.bitcoins = 1;
			console.log("hola")
			$scope.exchangeBitcoins = function()
			{
				x = exchange()
				console.log(x)
			}

	}]);