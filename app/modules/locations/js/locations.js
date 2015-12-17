angular.module('module_locations',[])

.controller('controller_locations', ['$http', '$scope', function($http, $scope){
	$http.get('api/items').success(function(result){
		$scope.items=result;
	}).error(function(e){

	});
}]);