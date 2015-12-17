angular.module('module_customers',[])

.controller('controller_customers', ['$http', '$scope', function($http, $scope){
	$http.get('api/items').success(function(result){
		$scope.items=result;
	}).error(function(e){

	});
}]);