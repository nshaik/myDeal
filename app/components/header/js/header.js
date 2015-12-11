angular.module('header',['nav','logo','m_items'])

.directive('stHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/header/views/header.html',
    replace: true
  };
});