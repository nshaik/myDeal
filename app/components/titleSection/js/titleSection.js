angular.module('titleSection',[])

.directive('stTitleSection', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/titleSection/views/titleSection.html',
    replace: true
  };
});