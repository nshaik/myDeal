angular.module('layout',
		[
			'nav',
			'logo',
			'header',
			'titleSection',
			'module_dashboard',
			'module_companies',
			'module_items',
			'module_locations',
			'module_customers',
			'module_suppliers'
		])

.directive('stLayout', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/layout/views/layout.html',
    replace: true
  };
});