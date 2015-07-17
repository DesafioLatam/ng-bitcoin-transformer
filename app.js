var app = angular.module('app', []);
	app.controller('PhotoController', ['$scope', function ($scope) {
		$scope.a = 1
		$scope.incrementar = function(){
			$scope.a = $scope.a + 1
		} 
}]);