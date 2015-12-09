angular.module('logo',[])

.directive('stLogo', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/logo/views/logo.html',
    replace: true
  };
});