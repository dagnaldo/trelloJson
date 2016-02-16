'use strict';

/**
 * @ngdoc function
 * @name transformJsonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the transformJsonApp
 */
angular.module('transformJsonApp')
  .controller('MainCtrl', function ($scope, $http, Upload) {

	Array.prototype.contains = function(obj) {
	    var i = this.length;
	    while (i--) {
	        if (this[i] === obj) {
	            return true;
	        }
	    }
	    return false;
	}

  	var show = ['name', 'desc', 'shortUrl', 'labels'];

  	function getMap(data){
  		if(data.closed == false){
			data.dateLastActivity = Date(data.dateLastActivity);
  			return data;
  		}
  	}

  	function getKeys(data){
  		var arr = [];
  		angular.forEach(data, function(value, key){
  			if(show.contains(key)){
  				arr.push(key);
  			}
  		})

  		return arr;
  	}


    $scope.getContent = function($fileContent){

      var dataJson = (JSON.parse($fileContent));
      if(dataJson.lists || dataJson.lists.length){
        var list = angular.copy(dataJson.lists);

        $scope.dataJson = dataJson;
        $scope.listar = true;
        $scope.showInfo = false;
        $scope.list = list;
        $scope.errormsg = false;
      } else {
        $scope.errormsg = 'JSON não suportado!';
      }


    };


    $scope.showTable = function(selectedValue){
      var cards = angular.copy($scope.dataJson.cards);
      var values = cards.filter(function(a){return a.idList == selectedValue});

      values.map(function(a){
        return a.labels.length ? a.labels = a.labels[0].name : a.labels = '';
      })

      $scope.showInfo = true;
      $scope.listar = false;

      $scope.keys = getKeys(values[0]);
      $scope.dataJson = values;

      $scope.csvData = values.map(function(a){
          var obj = {};
          
          angular.forEach($scope.keys, function(key){ 
            obj[key] = a[key];
          })
          
          return obj;
      })
      
    }


  });
