angular.module('module_items',[])

.controller('controller_items', ['$http', '$scope', function($http, $scope){
	$http.get('api/items').success(function(result){
		$scope.items=result;
	}).error(function(e){

	});
}]);