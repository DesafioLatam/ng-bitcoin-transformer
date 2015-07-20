angular.module('app').service('BitcoinApiCall', ['$http', function($http){
	var results = "";
	exchange = function(method, qty)
	{

		if (method == undefined)	{
			method = "buy";
		}

		options = {
			url: "https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/" + method,
			method: 'GET',
			headers: {
				'X-Mashape-Key':'yvU0GDeVzomshLIpyOJyuOq7BQxbp1k6xcGjsnerwWf9tuSgD9',
				"Accept": "text/plain"
			},
			params: {
				qty: qty,
			}
		};

		$http(options)
		.success(function(data){
			results = data;
		})
		.error(function(data){
			results = data;
		})
		.then(function()
		{
			console.log(results)
			return results;

		})
	}

}]);