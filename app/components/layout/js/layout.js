angular.module('layout',[])

.directive('stLayout', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/layout/views/layout.html',
   // templateUrl: 'components/logo/views/logo.html',
    replace: true
  };
});