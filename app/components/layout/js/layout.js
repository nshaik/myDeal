angular.module('layout',['nav','logo','header', 'titleSection', 'm_items'])

.directive('stLayout', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/layout/views/layout.html',
    replace: true
  };
});