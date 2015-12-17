angular.module('titleSection',[])

.directive('stTitleSection', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/titleSection/views/titleSection.html',
    replace: true,
    controller:['$scope', '$location', function($scope, $location) {

      $scope.$watch(function () {
		    return location.hash
		}, function (value) {
		    $scope.title = $location.path().split('/')[1];
		});      
    }]
  };
});