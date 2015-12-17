angular.module('nav',[])

.directive('stNav', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/nav/views/nav.html',
    replace: true,
     link: function($scope, $element) {
      $scope.$watch(function () {
		    return location.hash
		}, function (value) {
		    $element.find('li').removeClass('active').each(function(){
		    	if(value === $(this).find('a').attr('href')) {
		    		$(this).addClass('active');
		    		return;
		    	}
		    });
		});      
    }
  };
});