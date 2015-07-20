angular.module('app').service('BitcoinApiCall', ['$http', function($http)
{  

  function _options(method,qty){
  
  return {
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
  
  }
  
  this.getExchangePrices = function(method,qty){  
  	return $http(_options(method, qty));
  };

}]);