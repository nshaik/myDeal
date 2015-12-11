angular.module('header',[])

.directive('stHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/header/views/header.html',
    replace: true
  };
});