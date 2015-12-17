angular.module('module_suppliers',[])

.controller('controller_suppliers', ['$http', '$scope', function($http, $scope){
	$http.get('api/items').success(function(result){
		$scope.items=result;
	}).error(function(e){

	});
}]);