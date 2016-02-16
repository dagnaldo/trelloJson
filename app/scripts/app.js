'use strict';

/**
 * @ngdoc overview
 * @name transformJsonApp
 * @description
 * # transformJsonApp
 *
 * Main module of the application.
 */
angular
  .module('transformJsonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCsv',
    'ngMaterial',
    'ngFileUpload',
    'ngCsv'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
