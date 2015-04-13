'use strict';

angular.module('englishClubApp')
  .controller('ClubCtrl', function ($scope,$stateParams,$http) {
   
    $scope.stateParams = $stateParams;    
    
    var path = 'api/listings/' + $stateParams.id;
    
    $http.get(path).
    success(function(data, status, headers, config) {
      $scope.listing = data;
    }).error(function(data, status, headers, config) {
      console.log(data);
    });
    
    $scope.addSesh = function(){
    	$scope.listing.classes.push({starttime:'Im New!'})
    }

  });
