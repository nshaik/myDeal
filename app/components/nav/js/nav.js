angular.module('nav',[])

.directive('stNav', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/nav/views/nav.html',
    replace: true
  };
});