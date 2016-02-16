'use strict';

/**
 * @ngdoc directive
 * @name transformJsonApp.directive:topbar
 * @description
 * # topbar
 */
angular.module('transformJsonApp')
  .directive('topbar', function () {
    return {
      templateUrl: 'views/topbar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
