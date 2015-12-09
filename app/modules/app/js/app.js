angular.module('st',['ngRoute','m_items','nav','logo','layout'])

.config(['$routeProvider', function($routeProvider){

	$routeProvider

		/*.when('/',{
			templateUrl : '../../home/views/home.html',
			controller	: 'controller_home'
		})*/

		.when('/items',{
			templateUrl : 'modules/items/views/items.html',
			controller	: 'controller_items'
		})

		.otherwise({
	        redirectTo: '/'
	    });

}]);