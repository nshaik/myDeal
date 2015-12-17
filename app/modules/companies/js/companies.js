angular.module('module_companies',['ui.bootstrap'])

.controller('controller_companies', ['$http', '$scope', function($http, $scope){
	$scope.isCollapsed=false;
}]);