var app = angular.module('app', []);
	app.controller('BitController', ['$scope', '$http', function ($scope, $http) {
		$scope.getPrice = function()
		{
			console.log("hola");
			options = {
				url: "https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/buy",
				method: 'GET',
				headers: {
					'X-Mashape-Key':'yvU0GDeVzomshLIpyOJyuOq7BQxbp1k6xcGjsnerwWf9tuSgD9',
					"Accept": "text/plain"
				},
				params: {
					qty: '5',
				}
			};

			$http(options)
			.success(function(data){
				console.log($scope.bitcoins)
				$scope.results = data
				$scope.price = data.amount
				console.log(data);
			})
			.error(function(data){
				console.log("error")
			})

		}
}]);