angular.module('titleSection',['nav','logo','m_items'])

.directive('stTitleSection', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/titleBar/views/titleSection.html',
    replace: true
  };
});