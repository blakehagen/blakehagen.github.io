var app = angular.module('blakeH', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: '/main/main.html',
			controller: 'MainCtrl'
		})

		.when ('/about', {
			templateUrl: '/about/about.html',
			controller: 'MainCtrl'
		})

		.otherwise({
			redirectTo: '/'
		})




});