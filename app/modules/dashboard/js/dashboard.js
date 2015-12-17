angular.module('module_dashboard',[])

.controller('controller_dashboard', ['$http', '$scope', function($http, $scope){
	$scope.title = "Dashboard"
	$http.get('api/items').success(function(result){
		$scope.items=result;
	}).error(function(e){

	});
}]);