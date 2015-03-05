angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	// $locationProvider.html5Mode(true);

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	})
	.state('login', {
		url: '/user/login',
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
	})
	.state('register', {
		url: '/user/register',
		templateUrl: 'templates/register.html',
		controller: 'RegisterCtrl'
	})
	.state('assignment', {
		url: '/assignment',
		templateUrl: 'templates/assignment.html',
		controller: 'AssignmentCtrl'
	})
	.state('dashboard', {
		url: '/dashboard',
		templateUrl: 'templates/dashboard.html',
		controller: 'DashboardCtrl'
	});

	$urlRouterProvider.otherwise('/');
});
