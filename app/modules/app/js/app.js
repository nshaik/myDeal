angular.module('st',['ngRoute','layout'])

.config(['$routeProvider', function($routeProvider){

	$routeProvider

		.when('/dashboard',{
			templateUrl : 'modules/dashboard/views/dashboard.html',
			controller	: 'controller_dashboard'
		})

		.when('/companies',{
			templateUrl : 'modules/companies/views/companies.html',
			controller	: 'controller_companies'
		})

		.when('/items',{
			templateUrl : 'modules/items/views/items.html',
			controller	: 'controller_items'
		})

		.when('/locations',{
			templateUrl : 'modules/locations/views/locations.html',
			controller	: 'controller_locations'
		})

		.when('/customers',{
			templateUrl : 'modules/customers/views/customers.html',
			controller	: 'controller_customers'
		})

		.when('/suppliers',{
			templateUrl : 'modules/suppliers/views/suppliers.html',
			controller	: 'controller_suppliers'
		})

		.otherwise({
	        redirectTo: '/dashboard'
	    });

}]);