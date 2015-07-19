angular.module('app')
	.controller('BitController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
		$scope.bitcoins = 1
		$scope.buyX = function()
		{
			options = {
				url: "https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/sell",
				method: 'GET',
				headers: {
					'X-Mashape-Key':'yvU0GDeVzomshLIpyOJyuOq7BQxbp1k6xcGjsnerwWf9tuSgD9',
					"Accept": "text/plain"
				},
				params: {
					qty: $scope.bitcoins,
				}
			};

			$http(options)
			.success(function(data){
				$scope.dollars = data.amount
				console.log(data);
			})
			.error(function(data){
				console.log("error")
			})			
		};
		$scope.sellX = function()
		{
			options = {
				url: "https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/buy",
				method: 'GET',
				headers: {
					'X-Mashape-Key':'yvU0GDeVzomshLIpyOJyuOq7BQxbp1k6xcGjsnerwWf9tuSgD9',
					"Accept": "text/plain"
				},
				params: {
					qty: $scope.bitcoins,
				}
			};
			$http(options)
			.success(function(data){
				$scope.dollars = data.amount
				console.log(data);
			})
			.error(function(data){
				console.log("error")
			})			

		};
	}]);